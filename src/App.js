import React, {useState} from "react"
import Child from "./components/Child"
function App(){
  const [data, setData] = useState({
    name:'?',
    email:'?'
  })
  const sendData = (data) =>{
    setData(data)
  }
  return(
    <div className="App">
      <h2>React Pass Data Child to Parent Component Example</h2>

      <Child sendData={sendData}/>
      <div>
        The user data sent from Child Component:
        <strong>{data.name + ':'+ data.email}</strong>
      </div>
    </div>

  )
}

export default App