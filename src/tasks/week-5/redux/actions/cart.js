export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
};

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
};

export const changeAmount = (id, amount) => {
    return {
        type: CHANGE_AMOUNT,
        id,
        amount
    }
};