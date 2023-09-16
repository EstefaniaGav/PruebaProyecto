import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { AuthProvider } from "./context/auth.context"
import './App.css'
import Supplier from "./pages/supplier"


function App() {
 
  return (
    // <AuthProvider>

    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login/>} />  */}
        <Route path='/supplier' element={<Supplier/>} /> 
      </Routes>  
    </BrowserRouter>
    // </AuthProvider>

  )
}

export default App
