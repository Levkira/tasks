import React from 'react';
import { useDispatch } from 'react-redux';
import { List } from 'semantic-ui-react';
import { fetchGistContent } from '../redux/actions/list';

export default function ListItem(props) {
    const dispatch = useDispatch();

    return (
        <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{props.item.filename}</List.Header>
                <List.Description as='a'
                    onClick={() => dispatch(fetchGistContent(props.item))}
                >Show more</List.Description>
            </List.Content>
        </List.Item>
    )
}
