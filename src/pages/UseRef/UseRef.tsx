import { useEffect, useRef } from "react";

const UseRef = () => {
    const inputRef = useRef <HTMLInputElement>(null)
    const userRef = useRef <HTMLInputElement>(null)

    useEffect( () => {
        inputRef.current?.focus()
    }, [])

    const handleClick = () => {
        console.log(`Username is: ${userRef.current?.value}`)
    }
    
    return (
        <div className="flex gap-5 my-10 justify-center">
            <input ref={inputRef} type="text" className="input input-bordered" placeholder="focus here"/>
            <input ref={userRef} type="text" className="input input-bordered" placeholder="username"/>
            <button onClick={handleClick} className="btn btn-primary">Sign</button>
        </div>
    );
};

export default UseRef;