import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'semantic-ui-react';
import { fetchGists } from '../redux/actions/list';
import ListItem from './ListItem';
const shortid = require('shortid');

export default function GistsList() {
    const dispatch = useDispatch();
    const { isLoading, items } = useSelector(state => state.gists);

    useEffect(() => {
        dispatch(fetchGists())
    }, []);

    return (
        <List divided relaxed>
            {isLoading && <span>Loading...</span>}
            {items.map(item =>
                <ListItem item={item} key={shortid.generate()}/>
            )}
        </List>
    )
}
