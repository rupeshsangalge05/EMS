import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div id='alltask' className='bg-[#1C1C1C] p-5 mt-5 mb-5 rounded ' >
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Copmleted Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
      </div>
      <div id='employeeTable' className=' overflow-auto'>
        {userData.map((element, idx) => {
        return <div key={idx} className='bg-gray-900 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>{element.firstname}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{element.taskNumbers.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{element.taskNumbers.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600'>{element.taskNumbers.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600'>{element.taskNumbers.failed}</h5>
        </div>
        })}
      </div>
    </div>
  )
}

export default AllTask


// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider';

// const AllTask = () => {
//   const [userData] = useContext(AuthContext);
//   const [sortBy, setSortBy] = useState(''); // State to manage sorting

//   // Sort handler
//   const handleSort = (key) => {
//     setSortBy(key); // Set the sorting key
//   };

//   // Sort userData based on the sortBy value
//   const sortedData = userData
//     ? [...userData].sort((a, b) => (b.taskNumbers[sortBy] - a.taskNumbers[sortBy]))
//     : [];

//   return (
//     <div id='alltask' className='bg-[#1C1C1C] p-5 mt-5 mb-5 rounded'>
//       <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//         <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//         <h3 className='text-lg font-medium w-1/5 cursor-pointer' onClick={() => handleSort('newTask')}>
//           New Task
//         </h3>
//         <h5 className='text-lg font-medium w-1/5 cursor-pointer' onClick={() => handleSort('active')}>
//           Active Task
//         </h5>
//         <h5 className='text-lg font-medium w-1/5 cursor-pointer' onClick={() => handleSort('completed')}>
//           Completed Task
//         </h5>
//         <h5 className='text-lg font-medium w-1/5 cursor-pointer' onClick={() => handleSort('failed')}>
//           Failed Task
//         </h5>
//       </div>

//       <div id='employeeTable' className='overflow-auto'>
//         {sortedData.length > 0 ? (
//           sortedData.map((element, idx) => (
//             <div key={idx} className='bg-gray-900 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
//               <h2 className='text-lg font-medium w-1/5'>{element.firstname}</h2>
//               <h3 className='text-lg font-medium w-1/5 text-blue-600'>
//                 {element.taskNumbers.newTask}
//               </h3>
//               <h5 className='text-lg font-medium w-1/5 text-yellow-600'>
//                 {element.taskNumbers.active}
//               </h5>
//               <h5 className='text-lg font-medium w-1/5 text-green-600'>
//                 {element.taskNumbers.completed}
//               </h5>
//               <h5 className='text-lg font-medium w-1/5 text-red-600'>
//                 {element.taskNumbers.failed}
//               </h5>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-white mt-5">No employee data available</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllTask;
