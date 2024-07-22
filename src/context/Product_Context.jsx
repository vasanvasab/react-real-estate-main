import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/product_reducer'
import items from '../data'
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from "../actions";


const initailState={
    rooms: [],
    sortedRooms: [],
    featured_rooms: [],
    rooms_loading: false,
  rooms_error:false,
    type: "all",
    single_room_loading: false,
    single_room_error:false,
  
    single_room:{}
   
}
const ProductContext=createContext()

export const ProductProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initailState)

    const fetchRooms=async()=>{
        dispatch({type:GET_PRODUCTS_BEGIN})
      try {
        let tempItems=items.map((item)=>{
     let id=item.sys.id
     let images=item.fields.images.map(image=>image.fields.file.url)
     let room={...item.fields,images,id}
     return room
        })
      
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: tempItems })

      return tempItems
      } catch (error) {
        dispatch({ type: GET_PRODUCTS_ERROR })
      }
       
    }

    const fetchSingleRoom=async(id)=>{
        dispatch({type:GET_SINGLE_PRODUCT_BEGIN})

        try {
            let tempRooms =[...state.rooms];
          
            let singleRoom=tempRooms.find((item)=>item.id === id)
        
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleRoom })
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
        }
    }

    



    useEffect(()=>{
        fetchRooms()
        
    },[])

  
    return(
        <ProductContext.Provider value={{...state,fetchSingleRoom}}>
    {children}
        </ProductContext.Provider>
    )
}

export const useProductContext=()=>{
    return useContext(ProductContext)
}