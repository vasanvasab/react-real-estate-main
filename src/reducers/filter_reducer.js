import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from "../actions"

const filter_reducer=(state,action)=>{
    if(action.type ===LOAD_PRODUCTS){

        let maxPrice=Math.max(...action.payload.map((p)=>p.price)) 
        let maxSize=Math.max(...action.payload.map((s)=>s.size)) 
        let maxGuests=Math.max(...action.payload.map((g)=>g.capacity))
       return{...state,all_rooms:action.payload,filters:{...state.filters,maxPrice,maxGuests,price:maxPrice,maxSize,size:maxSize},filtered_rooms:action.payload}

}

if(action.type === FILTER_PRODUCTS){
    const { all_rooms } = state
    const { text,type,guests,price,size,breakfast,pets } = state.filters
    let tempRooms = [...all_rooms]
    if (text) {
        tempRooms = tempRooms.filter((room) =>
        room.name.toLowerCase().startsWith(text)
      )
    }

    if(type !== 'all'){
   tempRooms=tempRooms.filter((room)=>room.type===type)
    }

     if(guests !== 'any'){
     tempRooms=tempRooms.filter((room)=>room.capacity === parseInt(guests))
    } 

    tempRooms = tempRooms.filter((room) => room.price <= price)
    tempRooms = tempRooms.filter((room) => room.size <= size)

    if(breakfast){
        tempRooms = tempRooms.filter((room) => room.breakfast === true)
    }
    if(pets){
        tempRooms = tempRooms.filter((room) => room.pets === true)
    }
    return { ...state, filtered_rooms: tempRooms }

 
}
if(action.type === SORT_PRODUCTS){
    const { sort, filtered_rooms } = state
    let tempProducts = []

    if(sort === 'price-lowest'){
        tempProducts=filtered_rooms.sort((a,b)=>{
            if(a.price < b.price){
             return -1
            }

            if(a.price > b.price){
                return 1
            }
            return 0
        })

    }
    if(sort === 'price-highest'){
        tempProducts=filtered_rooms.sort((a,b)=>{
            if(b.price < a.price){
             return -1
            }

            if(b.price > a.price){
                return 1
            }
            return 0
        })

    }
    if (sort === 'name-a') {
        tempProducts = filtered_rooms.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === 'name-z') {
        tempProducts = filtered_rooms.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }

    return{...state,filtered_rooms:tempProducts}
}

if(action.type === SET_GRIDVIEW){
    return{...state,grid_view:true}
}
if(action.type === SET_LISTVIEW){
    return{...state,grid_view:false}
}
if(action.type === UPDATE_SORT){
    return{...state, sort: action.payload}
}


if(action.type === UPDATE_FILTERS){
    const { name, value } = action.payload
   console.log(name);
   console.log(value);
    return { ...state, filters: { ...state.filters, [name]: value } }
}
if(action.type === CLEAR_FILTERS){
    return{...state}
}

}

export default filter_reducer