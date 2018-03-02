import * as actionTypes from "./actionTypes";

export const increment=()=>{
    return{
        type:actionTypes.INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:actionTypes.DECREMENT
    }
}

export const add=(value)=>{
    return{
        type:actionTypes.ADD,
        val:value
    }
}

export const substract=(value)=>{
    return{
        type:actionTypes.SUBTRACT,
        val:value
    }
}


export const saveResult=(res)=>{
    return{
      type: actionTypes.STORE_RESULT,
      result: res
    }
  }
  
  export const storeResult = (res) => {
    return (dispatch, getSatate)=>{
      setTimeout(()=>{
          const oldCount=getSatate().counter;
          console.log(oldCount);
        dispatch(saveResult(res));
      },2000);
    }
  };
  

export const deleteResult=(resElId)=>{
    return{
        type:actionTypes.DELETE_RESULT,
        resultElId:resElId
    }
}