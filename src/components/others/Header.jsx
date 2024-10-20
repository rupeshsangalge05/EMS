import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {

  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello,
          <br />
          <span className="text-3xl font-semibold">username 👋</span> 
        </h1>
        <button onClick={logOutUser} className="border-none bg-red-600 text-lg font-medium py-2 px-5 rounded-xl hover:bg-red-700 hover:rounded-2xl">
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;





// import React from "react";

// const Header = (props) => {
//   const username = props.data ? props.data.firstname : "Admin";

//   const logOutUser = () => {
//     localStorage.removeItem("loggedInUser");  // Clear the logged-in user data from localStorage
//     props.changeUser("");  // Update state to log the user out
//   };

//   return (
//     <div className="flex items-end justify-between">
//       <h1 className="text-2xl font-medium">
//         Hello,
//         <br />
//         <span className="text-3xl font-semibold">{username} 👋</span>
//       </h1>
//       <button
//         onClick={logOutUser}
//         className="border-none bg-red-600 text-lg font-medium py-2 px-5 rounded-xl hover:bg-red-700 hover:rounded-2xl"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Header;
