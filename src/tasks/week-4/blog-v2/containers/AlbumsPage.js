import React from 'react';
import useData from '../hooks/useData';
import { Dimmer, Loader, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function AlbumsPage() {
    const [albums, isFetching] = useData('/albums', []);
    return (
        <div>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <Card.Group>
                {albums.map(album =>
                    <div class="ui link card" key={album.id}>
                        <div class="content">
                            <div class="header">{album.title}</div>
                            <div class="description">
                                <Link to={`/users/${album.userId}/albums/${album.id}`}>Show photos</Link>
                            </div>
                        </div>
                    </div>
                )}
            </Card.Group>
        </div>
    )
}
