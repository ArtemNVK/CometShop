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
                    placeholder='Search CometShop'
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "Search CometShop"}
                    onChange={e => setName(e.target.value)}
                    ></input>
                    <button id="search-btn" type="submit">
                        <i id="search-icon" className="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
