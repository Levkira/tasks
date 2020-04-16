import React from 'react';
import useData from '../hooks/useData';
import { Link } from 'react-router-dom';
import { Card, Image, Dimmer, Loader } from 'semantic-ui-react';

export default function UsersPage() {
    const [users, isFetching] = useData('/users', []);
    return (
        <div>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <Card.Group>
                {users.map(user =>
                    <Card key={user.id}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        <Card.Content>
                            <Card.Header>
                                <Link to={`/users/${user.id}`} className='email'>{user.name}</Link>
                            </Card.Header>
                            <Card.Meta>
                                <span className='email'>{user.email}</span>
                            </Card.Meta>
                            <Card.Description>
                                {user.address.street} {user.address.suite},
                                    {user.address.city}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </div>
    )
}
