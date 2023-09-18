import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { MainRouter } from './routing'
import { getTokenFromLocalStorage } from './utils'
import { requestWhoAmIAction } from './redux/actions'

import './App.css'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestWhoAmIAction())
  }, [dispatch])

  return (
    <>
      <MainRouter token={getTokenFromLocalStorage() || ''}/>
    </>
  )
}

export default App
