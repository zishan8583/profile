import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login'
import Project from './components/dashboard/project/Project';
import CreateProject from './components/dashboard/project/Createproject';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/dashboard/project/ProjectDetails';
import EditProject from './components/dashboard/project/EditProject';
import { useAuth } from './store/authContext';
import OnGoingProject from './components/dashboard/project/OnGoingProject';
import CompletedProject from './components/dashboard/project/CompletedProject';
import FundReceived from './components/dashboard/fund/FundReceived';
import EditFund from './components/dashboard/fund/EditFund';
import DocumentRepo from './components/dashboard/documentRepo/DocumentRepo';
import Feedback from './components/dashboard/Feedback';



function App() {

  const { isLoggedIn } = useAuth();
  
  return isLoggedIn ? <DashboardScreen /> : <Auth />;
}


function Auth() {


  return (
    <Router>
      <Routes>
         <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  )
}



export const DashboardScreen = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Dashboard/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/projects" element={<Project/>} />
         <Route path="/ongoingprojects" element={<OnGoingProject/>} />
         <Route path="/completedprojects" element={<CompletedProject/>} />
         <Route path="/projects/:id" element={<ProjectDetails/>} />
         <Route path="/editproject/:id" element={<EditProject />} />
         <Route path="/createproject" element={<CreateProject/>} />
         <Route path="/fundreceived" element={<FundReceived/>} />
         <Route path="/editfund" element={<EditFund/>} />
         <Route path="/feedback" element={<Feedback/>} />
         <Route path="/documents" element={<DocumentRepo/>} />
      </Routes>
    </Router>
  )
}



export default App
