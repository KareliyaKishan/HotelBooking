import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import About from "./components/about/About";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Contact from "./components/contact/Contact";
import Payment from "./components/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signIn" element = {<SignIn/>}/>
        <Route path="/signUp" element = {<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Payment" element={<Payment/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
