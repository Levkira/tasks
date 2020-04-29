import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Header, Icon, Segment, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductsPage from './containers/ProductsPage';
import CartPage from './containers/CartPage';

function ShopPage({ products, inCart }) {
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const amount = (inCart.lenght === 0) ?
        0 : inCart.map(prod => prod.amount).reduce((prev, next) =>
            prev + next
            , 0);
    return (
        <div>
            <Segment inverted >
                <Header as='h4' icon textAlign='center' >
                    <Icon name='paw' circular inverted color='yellow' />
                    <Header.Content>Pet Products</Header.Content>
                </Header>
            </Segment>
            <Container className='wrapper'>
                <Router>
                    <Menu pointing secondary>
                        <Menu.Item
                            as='p'
                            name='home'
                            active={activeItem === 'home'}
                            onClick={handleItemClick}
                        >
                            <NavLink to='/home' className='menu_link' activeClassName='menu_link_active'>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item
                            as='p'
                            name='products'
                            active={activeItem === 'products'}
                            onClick={handleItemClick}
                        >
                            <NavLink to='/products' className='menu_link' >Products</NavLink>
                        </Menu.Item>
                        <Menu.Item
                            as='p'
                            name='cart'
                            active={activeItem === 'cart'}
                            onClick={handleItemClick}
                        >
                            <NavLink to='/cart' className='menu_link' >Cart</NavLink>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='cart'
                                active={activeItem === 'cart'}
                                onClick={handleItemClick}
                            >
                                <Icon name='in cart' link size='large' />
                                <Label color='green' floating>{amount}</Label>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <Switch>
                        <Route path='/home' exact>
                            <HomePage />
                        </Route>
                        <Route path='/products' exact>
                            <ProductsPage products={products} />
                        </Route>
                        <Route path='/cart' exact>
                            <CartPage />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products.products,
    inCart: state.cart
});

export default connect(mapStateToProps)(ShopPage)

