import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10  justify-between gap-5 w-full">
      <div className="w-[45%] bg-red-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] bg-blue-500 p-10 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="w-[45%] bg-green-500 p-10 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] bg-yellow-500 p-10 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;





// import React from "react";

// const TaskListNumbers = ({ data }) => {
//   return (
//     <div className="flex flex-wrap mt-10 justify-between gap-5 w-full">
//       <div className="w-[22%] bg-red-500 py-6 px-9 rounded-xl">
//         <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
//         <h3 className="text-xl font-medium">New Task</h3>
//       </div>
//       <div className="w-[22%] bg-blue-500 py-6 px-9 rounded-xl">
//         <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
//         <h3 className="text-xl font-medium">Active Task</h3>
//       </div>
//       <div className="w-[22%] bg-green-500 py-6 px-9 rounded-xl">
//         <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
//         <h3 className="text-xl font-medium">Completed Task</h3>
//       </div>
//       <div className="w-[22%] bg-yellow-500 py-6 px-9 rounded-xl">
//         <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
//         <h3 className="text-xl font-medium">Failed Task</h3>
//       </div>
//     </div>
//   );
// };

// export default TaskListNumbers;
