import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Dimmer, Loader, List, Button } from 'semantic-ui-react';
import { fetchPosts } from '../slices/postsSlice';
import { likePost } from '../slices/postsSlice';

function PostsPage() {
  const dispatch = useDispatch();
  const { isFetching, posts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  const likeAPost = (postId) => {
    dispatch(likePost(postId));
  };
  
  return (
    <Container >
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      {posts.map(post =>
        <List.Item key={post._id}>
          <List.Content>
            <List.Header as='a'>{post.title}</List.Header>
            <List.Description>
              {post.body}
            </List.Description>
            <List.Content>
              <Button
                content='Like'
                icon='heart'
                label={{ as: 'a', basic: true, content: post.likes.length }}
                onClick={() => likeAPost(post._id)}
              />
            </List.Content>
          </List.Content>
        </List.Item>
      )}
    </Container>
  );
}

export default PostsPage;
