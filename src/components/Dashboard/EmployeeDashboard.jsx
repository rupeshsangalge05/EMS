import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard




// import React, { useState, useEffect } from 'react';
// import Header from '../others/Header';
// import TaskListNumbers from '../others/TaskListNumbers';
// import TaskList from '../TaskList/TaskList';

// const EmployeeDashboard = (props) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Mock fetching tasks
//     const fetchTasks = async () => {
//       try {
//         setLoading(true);
//         // Simulate API call delay
//         const response = await new Promise((resolve) =>
//           setTimeout(() => resolve({ data: props.data.tasks }), 1000)
//         );
//         setTasks(response.data || []);
//       } catch (err) {
//         setError('Failed to load tasks');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [props.data]);

//   if (loading) {
//     return <div>Loading tasks...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
//       <Header data={props.data} changeUser={props.changeUser} />
//       <TaskListNumbers data={props.data} tasks={tasks} />
//       <TaskList data={props.data} tasks={tasks} />
//     </div>
//   );
// };

// export default EmployeeDashboard;
