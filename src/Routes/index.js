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

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/flows" element={<Flows />} />

        {/* <Route exact path='/status"' element={<PrivateRoute />}>
                <Route exact path='/status"' element={<Status />} />
        </Route> */}

        <Route path="/status" element={<Status />} />
        <Route path="/super-dash/:eId" element={<SuperDash />} />
        <Route path="/user-profile/:id" element={<EmployeeDetails />} />
        <Route path="/form/createform" element={<FormCreate />} />
      </Routes>
    </>
  );
};
export default AllRoutes;
