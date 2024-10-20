import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border border-emerald-600 text-white outline-none bg-transparent placeholder:text-gray text-xl py-3 px-5 rounded-full mt-3"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border border-emerald-600 text-white outline-none bg-transparent placeholder:text-gray text-xl py-3 px-5 rounded-full mt-3"
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <button className=" mt-7 bg-emerald-600 text-white outline-none placeholder:text-white text-xl py-3 px-20 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;





// import React, { useState } from "react";

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null); // Error state
//   const [loading, setLoading] = useState(false); // Loading state

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setError(null); // Reset error
//     setLoading(true); // Set loading state

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       setLoading(false);
//       return;
//     }

//     handleLogin(email, password);

//     setLoading(false);
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="flex h-screen w-screen items-center justify-center">
//       <div className="border-2 rounded-xl border-emerald-600 p-20">
//         <form
//           onSubmit={(e) => submitHandler(e)}
//           className="flex flex-col items-center justify-center"
//         >
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="border border-emerald-600 text-white outline-none bg-transparent placeholder:text-gray text-xl py-3 px-5 rounded-full mt-3"
//             type="email"
//             placeholder="Enter your email"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-emerald-600 text-white outline-none bg-transparent placeholder:text-gray text-xl py-3 px-5 rounded-full mt-3"
//             type="password"
//             placeholder="Enter your password"
//           />
//           {error && <p className="text-red-500 mt-2">{error}</p>} {/* Error display */}
//           <button
//             className={`mt-7 ${loading ? "bg-gray-400" : "bg-emerald-600"} text-white outline-none placeholder:text-white text-xl py-3 px-20 rounded-full`}
//             disabled={loading} // Disable button while loading
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
