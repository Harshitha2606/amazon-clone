export const initialState = {
    basket: [],
    user: null
};

export const getBasketAmount = (basket) => 
    basket?.reduce((amount, item) => amount+item.price, 0);

export const reducer = (state, action) => {
    //console.log(action);
    //console.log(state.basket);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex
            (
                basketItem => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >=0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn("Can't remove the item in basket");
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default: 
            return state;
    }

};