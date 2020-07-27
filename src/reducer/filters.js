

const filterDefaultState = {
    text:''
}

export default (state=filterDefaultState,action)=>{
    switch(action.type){
     case 'SET_TEXT_FILTER':
    return {
        ...state,
         text:action.text
    }
    default:
        return state
    }
   

}