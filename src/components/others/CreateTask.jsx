import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false})

    const data = userData;

    data.forEach((element) => {
      if(assignTo == element.firstname){
        element.tasks.push(newTask)
        element.taskNumbers.newTask = element.taskNumbers.newTask + 1
      }
    });
    setUserData(data)
    // localStorage.setItem('employees', JSON.stringify(data))

    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a ui design"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              placeholder="Date"
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder="Enter your description"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;



// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthProvider";

// const CreateTask = () => {
//   const [userData, setUserData] = useContext(AuthContext);

//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskDate, setTaskDate] = useState("");
//   const [assignTo, setAssignTo] = useState("");
//   const [category, setCategory] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();

//     // Creating the new task object
//     const newTask = {
//       taskTitle,
//       taskDescription,
//       taskDate,
//       category,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     };

//     const updatedData = userData.map((employee) => {
//       if (assignTo === employee.firstname) {
//         return {
//           ...employee,
//           tasks: [...employee.tasks, newTask],
//           taskNumbers: {
//             ...employee.taskNumbers,
//             newTask: employee.taskNumbers.newTask + 1,
//           },
//         };
//       }
//       return employee;
//     });

//     // Update state and local storage
//     setUserData(updatedData);
//     localStorage.setItem("employees", JSON.stringify(updatedData));

//     // Reset the form fields
//     setAssignTo("");
//     setCategory("");
//     setTaskDate("");
//     setTaskDescription("");
//     setTaskTitle("");

//     alert("Task created successfully!");
//   };

//   return (
//     <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
//       <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
//         <div className="w-1/2">
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//             <input
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//               type="text"
//               placeholder="Make a UI design"
//             />
//           </div>
//           <div>
//             <h3>Date</h3>
//             <input
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//               type="date"
//               placeholder="Date"
//             />
//           </div>
//           <div>
//             <h3>Assign to</h3>
//             <select
//               value={assignTo}
//               onChange={(e) => setAssignTo(e.target.value)}
//               className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//             >
//               <option value="">Select Employee</option>
//               {userData.map((employee, idx) => (
//                 <option key={idx} value={employee.firstname}>
//                   {employee.firstname}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <h3>Category</h3>
//             <input
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//               type="text"
//               placeholder="Design, Dev, etc."
//             />
//           </div>
//         </div>
//         <div className="w-2/5 flex flex-col items-start">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             className="w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
//             placeholder="Enter your description"
//           ></textarea>
//           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
