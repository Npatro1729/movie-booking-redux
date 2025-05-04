const initialState = {isloading:true,movieData:[],bookingResponse:{}}

export default function (state = initialState,action){
    switch(action.type){
        case "GET_MOVIES":
            return {...state,movieData:action.payload,isloading: false};
        case "BOOK_MOVIES":
            return {...state,bookingResponse:action.payload};
        default:
            return state;
    }
}