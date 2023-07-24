
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Forum from "./Pages/Forum";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <SignUp/>
              <Footer/>
            </>
          } />
          <Route path="/homepage" element={
            <>
              <HomePage/>
            </>
          } />
          <Route path="/forum" element={
            <>
              <Forum/>
            </>
          } />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
