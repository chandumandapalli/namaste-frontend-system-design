import { Outlet, Navigate } from "react-router-dom";

// creating a seperate file in the components folder by name  as shown 
// and do the need ful as shown below.. 


const ProtectedRoute = () => {
  // Write Authentication Logic
  // Make login APi call, ceck if token valid
  const isAuthenticated = false;
  //<Outlet /> is the place where children can render.. 
  // so when the use is authencaited .. then all the child routes  are given  a permision to access them 
  // and they can be rendered else . will redirectx to Login page .. as shown .. 
  

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
