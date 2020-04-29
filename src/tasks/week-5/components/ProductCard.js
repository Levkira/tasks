import React from 'react';
import {Button, Card, Image } from 'semantic-ui-react';

export default function ProductCard({ product, addToCart }) {
    return (
        <Card centered>
            <Image src={product.imageUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{product.title}</Card.Header>
                <Card.Meta>
                    <span className='price'>${product.price}</span>
                </Card.Meta>
                <Card.Description>
                    {product.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={()=>addToCart(product.id)}
                    floated='right' color='yellow'>
                    Add to cart
            </Button>
            </Card.Content>
        </Card>
    )
}


