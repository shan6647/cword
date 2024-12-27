import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarpages from "./Pages/Navbarpages";
import Softwaredevelopment from "./Components/Softwaredevelopment";
import Blog from "./Components/Blog";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
<Route path="/"element={<Navbarpages/>}/>
{/* <Route path="/"element={<Dashboard/>}/> */}

<Route path="/softwaredevelopment"element={<Softwaredevelopment/>}/>
<Route path="/Blog"element={<Blog/>}/>
   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App

