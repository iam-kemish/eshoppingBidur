import "./App.css";
import Description from "./Components/Description";
import HomePage from "./Components/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemList from "./Components/ItemList";


function App() {
  return (
    <>
     <BrowserRouter>
      <div>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Desc" element={<Description />} />
          <Route path="/item" element={<ItemList />} />
         
        </Routes>
      </div>
    </BrowserRouter>
    </>

   
  )
}

export default App;
