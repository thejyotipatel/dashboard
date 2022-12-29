import { useState } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
 
  const getData = async () => {
    console.log('get data :---')
    try{
      let url = '/api/api/v1/data'
      const {data} = await axios.get(url)
      console.log(data)

    }catch(err){
       console.log(err)
    }
  }
  
  return (
    <div className='App'>
      Click on the Vite and React logos to learn more
      <button onClick={() => getData()}>Get data</button>
    </div>
  )
}

export default App
