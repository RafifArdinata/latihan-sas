import React from 'react'
function reducer(state, action) {
    if (action.type === 'PENGURANGAN') {
        return state - 1;
    }   
    return state;
}
function ExampleTwo() {
    const[state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: 'PENGURANGAN' })}>Kurang 1</button>
    </div>
  )
}

export default ExampleTwo