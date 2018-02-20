const redux=require("redux");
const createStore=redux.createStore;

const initialState={
    counter:0
};


// reducer........arguments....state.//..action

var rootReducer=(state=initialState,action)=>{
    
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter:state.counter+1
        };
    }

    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter+action.value
        };
    }
    
    return state;
}

var store=createStore(rootReducer);


console.log(store.getState());



// subscriptions.............for every change in state..subscription gets triggered...
//................................
store.subscribe(()=>{
    console.log('{subscription}---->',store.getState());
})



// disptaching actions....

store.dispatch({
    type:'INC_COUNTER'
});

store.dispatch({
    type:'ADD_COUNTER',

    value:10
});

console.log(store.getState());
