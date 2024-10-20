import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children} 
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;




// import React, { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState([]); // initialize as empty array or object

//   useEffect(() => {
//     const { employees } = getLocalStorage() || { employees: [] };  // fallback if no data
//     setUserData(employees);
//   }, []);

//   // Persist changes to localStorage whenever userData updates
//   useEffect(() => {
//     if (userData.length > 0) { 
//       setLocalStorage("employees", userData);  // persist data to localStorage
//     }
//   }, [userData]);

//   return (
//     <AuthContext.Provider value={[userData, setUserData]}>
//       {children} 
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
