import React, { useRef, useState } from "react";

// import "./sass/styles.scss";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAC2p3eXzJwa1qPP1arI60WrAy2jnszHXU",
    authDomain: "learnzen-f1aee.firebaseapp.com",
    projectId: "learnzen-f1aee",
    storageBucket: "learnzen-f1aee.appspot.com",
    messagingSenderId: "734477435092",
    appId: "1:734477435092:web:6155dd6d379657a1507b41",
    measurementId: "G-1DZ3X7QB75",
});

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
    return <button onClick={signInWithGoogle}>Sing in with Google</button>;
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
