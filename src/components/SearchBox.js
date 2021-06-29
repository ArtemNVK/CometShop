import React, { useEffect, useState, useRef  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function SearchBox(props) {
    const [search, setSearch] = useState('');
    const [display, setDisplay] = useState(false);
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const [options, setOptions] = useState([]);
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    
    useEffect(() => {
        dispatch(listProducts({}));
        window.addEventListener("mousedown", handleClickOutside);
            return () => {
        window.removeEventListener("mousedown", handleClickOutside);
    };
      }, []);

      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
      };

    const update = item => {
        setSearch(item.name);
        props.history.push(`/product/${item._id}`);
        setDisplay(false);
    };

    const onChangeHandler = e => {
        setSearch(e.target.value);
        let matches;

        if(e.target.value === '') {
            setDisplay(false);
            return;
        }

        if(options.length === 0) {
            setDisplay(false);
            return;
        }

        if(products){
            if(products.results) {
                if (search.length >= 0) {
                        matches = products.results.filter(item => {
                        const regex = new RegExp(`${search}`, "gi");
                        return item.name.match(regex)
                    })
                } 
            }
        }
        setOptions(matches)
        setDisplay(true);

        console.log(e.target.value)
    }

    const handleOnBlur = e => {
            setDisplay(false);
    }

    const submitHandler = e => {
        e.preventDefault();
        props.history.push(`/search/name/${search}`);
        setDisplay(false);
    }

    return (
        <div>
            <form 
            ref={wrapperRef}
            className={display ? "search autocomplete-open" : "search search-hover"}
            onSubmit={submitHandler}
            >
                <div className="row">
                    <input 
                    type="text" 
                    name="q"
                    id="q"
                    placeholder='Search CometShop'
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={e => e.target.placeholder = "Search Cometshop"} 
                    onChange={e => onChangeHandler(e)}
                    ></input>
                    <button id="search-btn" type="submit">
                        <i id="search-icon" className="fa fa-search"></i>
                    </button>
                </div>
                {display && 
                  <div 
                    className={display ? "autoContainer" : ""} 
                    style={display ? {"display" : "block"} : {"display" : "none"}}
                  >
                {options &&
                  <div>
                  {search.length > 0 && options
                        .map((value, i) => {
                        return (
                            <div
                            tabIndex="0"
                            onClick={() => update(value)}
                            className="option"
                            key={i}
                            >
                            <span>{
                                value.name.length < 50 ?
                                    value.name 
                                :
                                value.name.substring(0, 50) + ' ...'
                            }</span>
                            <img className="option-images-thumbnail" src={value.image} alt="item" />
                            </div>
                        );
                        })}
                    </div>
                    }
                    </div>
                    }
            </form>
        </div>
    )
}
