import React from 'react';
import { Container, List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { removeFromCart, changeAmount } from '../redux/actions/cart';
import CartList from '../components/CartList';

function CartPage({ inCart, removeFromCart, changeAmount, products }) {
    let total = 0;
    let addedItems = inCart.map(product => {
        const newProduct = products.find(prod => prod.id === product.id);
        total += newProduct.price * product.amount;
        return (
            <CartList
                key={product.id}
                product={newProduct}
                amount={product.amount}
                onRemove={() => removeFromCart(newProduct.id)}
                onChangeAmountPlus={() => changeAmount(newProduct.id, product.amount++)}
                onChangeAmountMinus={() =>
                    changeAmount(newProduct.id,
                        (product.amount === 1) ? 1 : product.amount--)
                }
            />
        )
    });

    return (
        <Container>
            <List divided verticalAlign='middle'>{addedItems}</List>
            <Header>Total ${total.toFixed(2)}</Header>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.products.products,
    inCart: state.cart
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: id => dispatch(removeFromCart(id)),
    changeAmount: (id, amount) => dispatch(changeAmount(id, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
