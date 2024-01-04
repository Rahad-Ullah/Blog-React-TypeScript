import React from 'react';

const Events = () => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('Search Button clicked');
    }

    
    return (
        <div className="pb-16">
            <form className="flex gap-4 justify-center">
                <input onChange={handleSearch} className="input input-bordered w-full md:w-2/5" type="text" placeholder="Search anything..."/>
                <button onClick={handleClick} className="btn btn-accent text-base px-6">Search</button>
            </form>
        </div>
    );
};

export default Events;