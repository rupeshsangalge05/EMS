import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='max-h-fit overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
      {data.tasks.map((element, idx) => {
          if(element.active){
            return <AcceptTask key={idx} data={element} />
          }
          if(element.newTask){
            return <NewTask key={idx} data={element} />
          }
          if(element.completed){
            return <CompleteTask key={idx} data={element} />
          }
          if(element.failed){
            return <FailedTask key={idx} data={element} />
          }
        })
      }
    </div>  
  )
}

export default TaskList





// import React from 'react'
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'


// const TaskList = ({ data }) => {
//   return (
//     <div id='tasklist' className='h-64 overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
//       {data.tasks.map((task, idx) => {
//         switch (task.status) {
//           case "active":
//             return <AcceptTask key={idx} data={task} />;
//           case "new":
//             return <NewTask key={idx} data={task} />;
//           case "completed":
//             return <CompleteTask key={idx} data={task} />;
//           case "failed":
//             return <FailedTask key={idx} data={task} />;
//           default:
//             return null;
//         }
//       })}
//     </div>
//   );
// };
