import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="h-screen w-full p-7">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;



// import React, { useState } from "react";
// import Header from "../others/Header";
// import CreateTask from "../others/CreateTask";
// import AllTask from "../others/AllTask";

// const AdminDashboard = (props) => {
//   const [tasks, setTasks] = useState([]); // State to hold tasks

//   const handleCreateTask = (newTask) => {
//     setTasks([...tasks, newTask]); // Add new task to the list
//   };

//   return (
//     <div className="h-screen w-full p-7">
//       <Header changeUser={props.changeUser} />
//       <CreateTask onCreate={handleCreateTask} /> {/* Pass handler to CreateTask */}
//       <AllTask tasks={tasks} /> {/* Pass tasks to AllTask */}
//     </div>
//   );
// };

// export default AdminDashboard;
