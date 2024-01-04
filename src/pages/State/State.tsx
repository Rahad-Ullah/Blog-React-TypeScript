import React, { useState } from "react";

type UserType = {
    name: string;
    sessionId: number;
}

const State = () => {
    const [user, setUser] = useState <UserType | null>(null)
    const [userName, setUserName] = useState("")
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserName(e.target.value)
        
    }

    const handleUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name: userName,
            sessionId: Math.random()
        })
    }
    
    return (
        <div>
            { user ? <h1 className="text-3xl font-semibold text-red-500 text-center mb-10">{user.name} logged in</h1>
            : <form className="flex gap-4 justify-center my-10">
                <input onChange={handleChange} className="input input-bordered w-full md:w-2/5" type="text" placeholder="Search anything..."/>
                <button onClick={handleUser} className="btn btn-secondary text-base px-6">Login</button>
            </form>
            }
        </div>
    );
};

export default State;