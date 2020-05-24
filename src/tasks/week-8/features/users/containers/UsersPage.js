import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image, Dimmer, Loader } from 'semantic-ui-react';
import { fetchUsers } from '../slices/usersSlice';

function UsersPage() {
  const dispatch = useDispatch();
  const { users, isFetching } = useSelector(state => state.users);
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);
  return (
    <div>
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      <Card.Group>
        {users.map(user =>
          <Card key={user._id}>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>{user.first_name}</Card.Header>
              <Card.Meta>
                <span className='email'>{user.email}</span>
              </Card.Meta>
              <Card.Description>
                {user.age} years old<br />
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    </div>
  );
}

export default UsersPage;
