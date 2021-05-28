import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <div className="price">${product.price.toFixed(2)}</div>
          <div className="card__name">
            <Link to={`/product/${product._id}`}>
              <h2>{product.name.length < 50 ? 
                    product.name
                    :
                    product.name.substring(0, 50) + ' ...'
                  }</h2>
            </Link>
          </div>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
      </div>
    </div>
  );
}
