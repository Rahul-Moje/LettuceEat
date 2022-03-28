import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GetOrderStatus from "./components/pages/GetOrderStatus";
import HomeScreen from "./components/pages/HomeScreen";
import Login from "./components/pages/Login";
import Menu from "./components/pages/Menu";
import MenuItem from "./components/pages/MenuItem";
import Order from "./components/pages/Order";
import OrderStatus from "./components/pages/OrderStatus";
import Signup from "./components/pages/Signup";
import UpdateOrderFinalScreen from "./components/pages/UpdateOrderFinalScreen";
import UpdateOrderStatus from "./components/pages/UpdateOrderStatus";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          

          <Route  path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/editprofile" element={<Editprofile/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/menuitem" element={<MenuItem/>}/>
          <Route path="/payments" element={<Payments/>}/>
          <Route path="/addCard" element={<AddCard/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="admin" element={<AdminRoute/>}>
            <Route path="home" element={<Admin/>}/>
            <Route index path="menu/add" element={<MenuForm />} />
            <Route index path="menu/manage" element={<ManageMenu />} />
            <Route path="menu/update" element={<UpdateMenu />}/>
            </Route>
            <Route path="/getorderstatus" element={<GetOrderStatus />} />
          <Route path="/getorderstatus/:orderid" element={<OrderStatus />} />
          <Route path="/updateorderstatus" element={<UpdateOrderStatus />} />
          <Route
            path="/updateorderstatus/:id"
            element={<UpdateOrderFinalScreen />}
          />
          <Route path="/orders" element={<Order />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
