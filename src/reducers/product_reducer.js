import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from "../actions"

const prdoduct_reducer=(state,action)=>{
if(action.type === GET_PRODUCTS_BEGIN){
    return { ...state, rooms_loading: true }
}

if(action.type === GET_PRODUCTS_SUCCESS){
   const featured_rooms=action.payload.filter((product)=>product.featured === true)
   return {
    ...state,
    rooms_loading: false,
   rooms: action.payload,
    featured_rooms,
  }
}

if(action.type === GET_PRODUCTS_ERROR){
    return{...state,rooms_error:true,rooms_loading:false}
}

if(action.type === GET_SINGLE_PRODUCT_BEGIN){
    return { ...state, single_room_loading: true,single_room_error:false }
}
if( action.type === GET_SINGLE_PRODUCT_SUCCESS){
   
    return { ...state,single_room_loading: false,single_room_error:false, single_room:action.payload }
 }

 if(action.type === GET_SINGLE_PRODUCT_ERROR){
    return { ...state, single_room_loading: false,single_room_error:true }
 }
}


export default prdoduct_reducer