import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { PRODUCT_REVIEW_CREATE_FAIL_RESET } from '../constants/productConstants';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(listProducts({page}));
    dispatch({ type: PRODUCT_REVIEW_CREATE_FAIL_RESET });
  }, [dispatch, page]);

  return (
    <div>
      <div className="carousel__container">
          <Carousel>
            <Link to="/search/category/Solar%20panels">
              <img src="uploads/banner1.jpg" alt="banner" />
            </Link>
            <Link to="/search/category/Solar%20panels">
              <img src="uploads/banner1.jpg" alt="banner" />
            </Link>
            <Link to="/search/category/Solar%20panels">
              <img src="uploads/banner1.jpg" alt="banner" />
            </Link>
          </Carousel>
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <div className="featuredProd__title">Featured products</div>
        <div className="row center">
          {products.results.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>

        <Pagination pages={products.pageNumbers.length} setCurrentPage={setPage} page={page}/>

        </>
      )}
    </div>
  );
}
