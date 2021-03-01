import React, { useState, useEffect, useRef } from "react";

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

const Counter = () => {
    const [count, setCount] = useState(0);

    useRecursiveTimeout(() => setCount(count + 1), 1200);

    return <div>{count}</div>;
};

export default Counter;
