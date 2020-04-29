import React from 'react';
import { List, Image, Button, Input } from 'semantic-ui-react';

export default function CartList({ product, onRemove, onChangeAmountPlus, onChangeAmountMinus, amount }) {
    return (
        <List.Item>
            <Image size='small' src={product.imageUrl} />
            <List.Content>
                <List.Header >{product.title}</List.Header>
            </List.Content>
            <List.Content floated='right' >
                <div className='card_counter'>
                    <Button
                        onClick={onChangeAmountMinus}
                        basic attached='left' icon='minus' />
                    <Input type='text' readOnly min='1' value={amount} className='card_input' />
                    <Button
                        onClick={onChangeAmountPlus}
                        basic attached='right' icon='plus' />
                    <div className='card_counter__price'>
                        ${(product.price * amount).toFixed(2)}
                    </div>
                    <Button basic onClick={onRemove} icon='close'>
                    </Button>
                </div>
            </List.Content>
        </List.Item>

    )
}