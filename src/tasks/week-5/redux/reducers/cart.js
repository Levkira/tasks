import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT } from '../actions/cart';

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = state.find(product => {
                return product.id === action.payload
            });
            if (addedProduct) {
                return state.map(product =>
                    product.id === action.payload ?
                        { ...product, amount: product.amount + 1 } : product);
            } else {
                return [{ id: action.payload, amount: 1 }, ...state]
            }
        case REMOVE_FROM_CART:
            return state.filter(product => action.payload !== product.id)
        case CHANGE_AMOUNT: 
            return state.map(product =>
                product.id === action.id ?
                (product.amount <= action.amount) ?
                   ({ ...product, amount: action.amount })
                :
                    ({ ...product, amount: action.amount })
                   : product    
            );
        default: return state;
    }
}