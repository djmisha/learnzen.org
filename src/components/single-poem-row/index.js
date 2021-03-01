// import React from "react";
import React, { useState, useEffect, useRef } from "react";
// import Counter from "../../delayDisplay";

const useRecursiveTimeout = (callback, delay = 1000) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = callback;
    });
    useEffect(() => {
        const tick = () => {
            const ret = ref.current();

            const nextDelay = Math.floor(Math.random() * (delay * 2)) + 1;
            if (!ret) {
                setTimeout(tick, nextDelay);
            } else if (ret.constructor === Promise) {
                ret.then(() => setTimeout(tick, nextDelay));
            }
        };

        const timer = setTimeout(tick, delay);

        return () => clearTimeout(timer);
    }, [delay]);
};

class SinglePoemRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.className,
        };
    }

    render() {
        const Counter = () => {
            const [count, setCount] = useState(0);

            useRecursiveTimeout(() => setCount(count + 1), 2000);

            return (
                <div>
                    <p>{count} sec</p>
                    {/* {signleArray} */}

                    {/* {console.log(
                        content.map((str, index) => <p key={index}>{str}</p>)
                    )} */}
                </div>
            );
        };

        localStorage.setItem("currentPoem", this.props.number);

        let number = this.props.number;
        let content = this.props.content;

        content = content
            .split("\n")
            .map((str, index) => <p key={index}>{str}</p>);

        let signleArray = [];
        for (let i = 0; i < content.length; i++) {
            const element = content[i];
            console.log(element);
            signleArray.push(element);
        }

        return (
            <li id={number} className={this.state.visible}>
                <Counter></Counter>
                <span>{number}</span>
                <div className="poem-content">{content}</div>
            </li>
        );
    }
}

export default SinglePoemRow;
