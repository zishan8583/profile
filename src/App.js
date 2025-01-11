import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/panels/Footer";
import Header from "./components/panels/Header";
import Sidebar from "./components/panels/Sidebar";
import Content from "./pages/Content";
import { AuthContext } from "./store/authContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import VendorList from "./pages/Dashboard/VendorList/VendorList";
import VerifyVendor from "./pages/Dashboard/verifyVendor/VerifyVendor";
import Profile from "./components/Profile";
import CategoryList from "./pages/Dashboard/categoryList/CategoryList";
import CategoryDetails from "./pages/Dashboard/categoryDetails/CategoryDetails";
import AddCategory from "./pages/Dashboard/categoryDetails/AddCategory";
import EditCategory from "./pages/Dashboard/categoryDetails/EditCategory";
import FaqList from "./pages/Dashboard/FAQ/FaqList";
import AddFaq from "./pages/Dashboard/FAQ/AddFaq";
import EditFaq from "./pages/Dashboard/FAQ/EditFaq";
import Wallet from "./components/modal/Wallet";
import RecentLeads from "./pages/Dashboard/leads/recentLeads/RecentLeads";
import BookingDetails from "./pages/Dashboard/leads/recentLeads/BookingDetails";

function App() {
  

  const [token, setToken] = useState("ghfhh")

  return token ? <Dashboard /> : <Auth login={setToken} />;
}

export default App;

const Auth = ({login}) => {

  return (
    <div className="h-full w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login token={login} />} />
        </Routes>
      </Router>
    </div>
  );
};

const Dashboard = () => {
 
  return (
    <div className="App wrapper">
      <Router>
        <Header />
        {/* <Sidebar /> */}
        {/* <Content/> */}
        <div>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/vendorlist" element={<VendorList/>} />
            <Route path="/verifyvendor" element={<VerifyVendor/>} />
            <Route path="/vendor/profile" element={<Profile/>} />
            <Route path="/categorylist" element={<CategoryList/>} />
            <Route path="/categorylist/addcategory" element={<AddCategory/>} />
            <Route path="/categorylist/details" element={<CategoryDetails/>} />
            <Route path="/categorylist/edit" element={<EditCategory/>} />
            <Route path="/faq" element={<FaqList/>} />
            <Route path="/faqlist/addfaq" element={<AddFaq/>} />
            <Route path="/faqlist/edit" element={<EditFaq/>} />
            <Route path="/generate/leads" element={<Wallet/>} />
            <Route path="/recent/leads"  element={<RecentLeads/>} />
            <Route path="/booking/details"  element={<BookingDetails/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
