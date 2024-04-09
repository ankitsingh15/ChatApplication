import React,{lazy} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Home= lazy(
  ()=>import("./pages/Home")
)
const Login= lazy(
  ()=>import("./pages/Login")
)
const Chat= lazy(
  ()=>import("./pages/Chat")
)
const Groups= lazy(
  ()=>import("./pages/Groups")
)
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1><Home/></h1>} />
      <Route path="/chat/:chatId" element={<h1><Chat/></h1>} />
      <Route path="/groups" element={<h1><Groups/></h1>} />
      <Route path="/login" element={<h1><Login/></h1>} />
                      

    </Routes>
    </BrowserRouter>
  )
}
