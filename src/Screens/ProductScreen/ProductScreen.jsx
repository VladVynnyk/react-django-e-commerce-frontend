import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap";
import Rating from "../../components/Product/Rating/Rating";

const ProductScreen = ({match}) => {

    let  { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(()=>{
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${id}`)
            setProduct(data)
        }
        fetchProduct()
    },[])
    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#f8e825'></Rating>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: {product.price} </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup>
                            <Col>
                                Status: {product.countInStock > 0 ? 'In Stock' : "Out of Stock"}
                            </Col>
                        </ListGroup>
                        <ListGroup>
                            <Button className = "btn-block" type="button" disabled={product.countInStock==0}>Add to cart</Button>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProductScreen;