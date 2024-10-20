import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore id dignissimos similique! Dignissimos, ratione! Quia.</p>
        <div className='mt-2'>
            <button className='w-full bg-red-500  py-1 px-2 text-sm'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask


// import React from 'react'

// const FailedTask = ({ data }) => {
  //   return (
    //     <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
    //       <div className='flex justify-between items-center'>
    //         <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
    //         <h4 className='text-sm'>{data.taskDate}</h4>
    //       </div>
    //       <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    //       <p className='text-sm mt-2'>{data.taskDescription}</p>
    //       <div className='mt-2'>
    //         <button className='w-full bg-red-500  py-1 px-2 text-sm'>Failed</button>
    //       </div>
    //     </div>
    //   );
    // };
    
    // export default FailedTask