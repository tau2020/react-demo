import React from 'react'
function Child(props){

    const user = {
        name:'Mark makoombe 11111',
        email:'mark@gmail.com lklkxknxlknlkn'
    }
    const onClick = ()=>{
        props.sendData(user)
    }
    return(
        <div><button onClick={onClick}>Click here</button></div>
    )
}

export default Child