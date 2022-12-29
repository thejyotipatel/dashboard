import React from 'react'

const AppContext = () => {
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  return <div>AppContext</div>
}

export default AppContext
