import React, { useRef, useState } from "react";
import firebase from '../firebase'
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
  const [user] = useAuthState(auth);
  return (
    <main className="Chat">
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </main>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <section className="chat-sign-in">
      <div>
        <p>To chat join the chat please sign in.</p>
      </div>
      <button onClick={signInWithGoogle}>Sing in with Google</button>
    </section>
  )
}

// function SignOut() {
//     return (
//         auth.currentUser && (
//             <button onClick={() => auth.signOut()}>Sign Out</button>
//         )
//     );
// }

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (formValue === "") {
      return;
    }

    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="screen-chat">
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL, displayName } = props.message;

  const messagesClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messagesClass}`}>
      <div className="userInfo">
        <img src={photoURL} alt="User Gravatar" />
        {displayName}
      </div>
      <p> {text} </p>
    </div>
  );
}

export default Chat;
