import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";
import Employee from "../pages/Employee";
import Login from "../pages/Login";
import Status from "../pages/Status";
import Flows from "../pages/Flows";
import SetPassword from "../pages/SetPassword";
import SuperDash from "../components/SuperDash";
import { Routes, Route, Redirect } from "react-router-dom";
import EmployeeDetails from "../components/EmployeeDetails";
import FormCreate from "../pages/FormCreate";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoutes";
import FormTable from "../components/form/FormTable";
import AssignaDeadline from "../components/AssignaDeadline";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/flows" element={<Flows />} />
        <Route path="/status" element={<Status />} />
        {/* <Route path="/super-dash/:eId" element={<SuperDash />} /> */}
        <Route path="/user-profile/:id" element={<EmployeeDetails />} />
        <Route path="/form/createform" element={<FormCreate />} />
        <Route path = "/deadline" element = {<AssignaDeadline/>}/>
      </Routes>
    </>
  );
};
export default AllRoutes;
