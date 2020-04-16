import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './blog-v2.css'
import { Container, Header, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import PostsPage from './containers/PostsPage';
import UsersPage from './containers/UsersPage';
import AlbumsPage from './containers/AlbumsPage';
import UserPage from './containers/UserPage';
import NotFoundPage from './containers/404';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default function Blog() {
    return (
        <Container>
            <Router>
                <Header>
                    <NavLink to='/' activeClassName='active-nav'>Blog V2</NavLink>
                </Header>
                <Menu>
                    <NavLink to='/posts' className='item' activeClassName='active-nav'>Posts</NavLink>
                    <NavLink to='/users' className='item' activeClassName='active-nav'>Users</NavLink>
                    <NavLink to='/albums' className='item' activeClassName='active-nav'>Albums</NavLink>
                </Menu>
                <TransitionGroup >
                    <CSSTransition
                        className="fade"
                        timeout={300}
                        appear={true}
                    >
                        <Switch>
                            <Route path='/' exact>
                                <HomePage />
                            </Route>
                            <Route path='/posts' exact>
                                <PostsPage />
                            </Route>
                            <Route path='/users' exact>
                                <UsersPage />
                            </Route>
                            <Route path='/users/:userId'>
                                <UserPage />
                            </Route>
                            <Route path='/albums'>
                                <AlbumsPage />
                            </Route>
                            <Router path='*'>
                                <NotFoundPage />
                            </Router>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Router>
        </Container>
    )
}
