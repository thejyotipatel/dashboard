<<<<<<< HEAD
import axios from 'axios'

function App() {
=======
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

>>>>>>> ea482491f416450130f6bfd949e48d13508eb192
  const getData = async () => {
    console.log('get data :---')
    try {
      let url = '/api/api/v1/data'
      const { data } = await axios.get(url)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='App'>
      Click on the Vite and React logos to learn more
      <button className='btn' onClick={() => getData()}>
        Get data
      </button>
    </div>
  )
}

export default App
