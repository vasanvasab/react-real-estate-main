import { createContext, useEffect, useReducer } from "react"
import reducer from '../reducers/filter_reducer'
import { useContext } from "react"
import { useProductContext } from "./Product_Context"
import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from "../actions"



const initialState={
    all_rooms:[],
    filtered_rooms:[],
    grid_view: true,
    sort: 'price-lowest',
    filters:{
        maxPrice:0,
        price:0,
        minPrice:0,
        maxSize:0,
        minSize:0,
        size:0,
        pets:false,
        breakfast:false,
        guests:'any',
        maxGuests:1,
        text:'',
        type:'all',
    
    }
}

const FilterContext=createContext()

export const FilterProvider=({children})=>{
   // const data=useProductContext()
    
    const{rooms}=useProductContext()
    //console.log("from filter context",rooms);
    const[state,dispatch]=useReducer(reducer,initialState)


useEffect(()=>{
        dispatch({type:LOAD_PRODUCTS,payload:rooms})
 },[rooms])
        


useEffect(()=>{
    dispatch({type:FILTER_PRODUCTS})
    dispatch({type:SORT_PRODUCTS})
},[state.sort,state.filters]) 


const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  const updateSort = (e) => {
    
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  const updateFilters=(e)=>{
    let name=e.target.name 
    let value=e.target.value
    console.log(name);
    console.log(value);
    if(name === 'type'){
      value = e.target.textContent
    }
    
    if(name ==='price' || name==='size'){
      value = Number(value)
    }

    if (name === 'breakfast' || name==='pets') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS ,payload: { name, value }})
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  } 
    return(
        <FilterContext.Provider value={{...state,setGridView,setListView,updateFilters,updateSort,clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilterContext)
}