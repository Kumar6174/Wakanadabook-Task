import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ProductsActionTypes,
  } from '../actions/productsActions';
  
  interface ProductsState {
    loading: boolean;
    products: any[];
    error: string | null;
  }
  
  const initialState: ProductsState = {
    loading: false,
    products: [],
    error: null,
  };
  
  export const productsReducer = (
    state = initialState,
    action: ProductsActionTypes
  ): ProductsState => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  