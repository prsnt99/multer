import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "../component/auth"

const Routing = () => {
 return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Auth/>}> </Route>
    </Routes>
   </BrowserRouter> 
 )
}

export default Routing