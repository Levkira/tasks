import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Container>
            <Header textAlign='center'>Everything you need for your pet</Header>
            <Image fluid src='/images/home_image.jpg'></Image>
        </Container>
    )
}

