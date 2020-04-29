import React from 'react';
import { Button, Input } from 'semantic-ui-react';

export default function AddToCart({ addProduct }) {
    return (
        <div className='card_counter'>
            <div>
                <Button basic attached='left' icon='minus' />
                <Input type='text' readOnly min='1' value='1' className='card_input' />
                <Button basic attached='right' icon='plus' />
            </div>
            <Button onClick={addProduct}
                floated='right' color='yellow'>
                Add to cart
            </Button>
        </div>
    )
}
