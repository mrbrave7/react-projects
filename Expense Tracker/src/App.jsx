// import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Transaction from './Components/TransactionForm/Transaction'
// import Login from './Pages/Login/Login'
// 
const App = () => {
  return (
    <main className='mainSection'>
      <Sidebar />
      <Transaction />
      {/* <Outlet /> */}
      {/* <Login /> */}
    </main>
  )
}

export default App

