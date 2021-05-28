import React, { useState } from 'react'

export default function SearchBox(props) {
    const [name, setName] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        props.history.push(`/search/name/${name}`)
    }
    return (
        <div>
            <form 
            className="search"
            onSubmit={submitHandler}
            >
                <div className="row">
                    <input 
                    type="text" 
                    name="q"
                    id="q"
                    placeholder="Search on CometShop"
                    onChange={e => setName(e.target.value)}
                    />
                    <button id="search-btn" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
