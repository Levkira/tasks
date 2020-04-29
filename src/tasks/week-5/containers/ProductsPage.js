import React from 'react';
import { Card } from 'semantic-ui-react';
import ProductCard from '../components/ProductCard';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

function ProductsPage({ products, addToCart }) {
    return (
        <Card.Group>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart} />
            ))}
        </Card.Group>
    )
}

const mapStateToProps = state => ({
    products: state.products.products
})

const mapDispatchToProps = dispatch => ({
    addToCart: id => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);