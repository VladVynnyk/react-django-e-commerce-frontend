import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Row, Col} from 'react-bootstrap';
import Product from "../components/Product/Product";
import listProducts from '../actions/productActions'

const HomeScreen = () => {
    let dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(()=>{
            dispatch(listProducts())
        }, [dispatch])
    return (
        <div>
            <h1>Latest products</h1>
            {loading ? <h2>Loading...</h2>
                : error ? <h3>{error}</h3>
            : <Row>
                {products.map(product=>(
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Product product={product}/>
                    </Col>))}
            </Row>}

        </div>
    );
};

export default HomeScreen;