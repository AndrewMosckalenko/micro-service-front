import './App.css'

import { MainRouter } from './routing'
import { getTokenFromLocalStorage } from './utils'

function App() {

  return (
    <>
      <MainRouter token={getTokenFromLocalStorage() || ''}/>
    </>
  )
}

export default App
