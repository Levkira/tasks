import React from 'react';
import { useParams } from 'react-router-dom';
import useData from '../hooks/useData';
import { Item, Dimmer, Loader, Image } from 'semantic-ui-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AlbumPage() {
    const { userId, albumId } = useParams();
    const [photos, isFetching] = useData(`/albums/${albumId}/photos`, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        slidesToShow: 3,
    };
    return (
        <div>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
            <Item.Group>
                <Slider {...settings}>
                    {photos.map(photo => <div key={photo.id}>
                        <Image src={photo.url} />
                    </div>)}
                </Slider>
            </Item.Group>
        </div>
    )
}
