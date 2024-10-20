const employees = [
  {
    id: "emp001",
    firstname: "Amit",
    email: "employee1@example.com",
    password: "12345",
    tasks: [
      {
        taskTitle: "Complete Report",
        taskDescription: "Finish the Q1 financial report.",
        taskDate: "2024-10-15",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team meeting.",
        taskDate: "2024-10-16",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Feedback",
        taskDescription: "Gather client feedback for the new product.",
        taskDate: "2024-10-17",
        category: "Product",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: "emp002",
    firstname: "Suman",
    email: "employee2@example.com",
    password: "12345",
    tasks: [
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the next project presentation.",
        taskDate: "2024-10-14",
        category: "Presentations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review the code submitted by the dev team.",
        taskDate: "2024-10-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Testing",
        taskDescription: "Test the new software module.",
        taskDate: "2024-10-18",
        category: "QA",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Update project documentation with latest changes.",
        taskDate: "2024-10-19",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: "emp003",
    firstname: "Rohit",
    email: "employee3@example.com",
    password: "12345",
    tasks: [
      {
        taskTitle: "Client Call",
        taskDescription: "Discuss project progress with the client.",
        taskDate: "2024-10-12",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Resolve Bug",
        taskDescription: "Fix the critical bug reported in the system.",
        taskDate: "2024-10-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Plan Marketing Campaign",
        taskDescription:
          "Create a strategy for the new product marketing campaign.",
        taskDate: "2024-10-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Product Launch",
        taskDescription: "Prepare for the upcoming product launch event.",
        taskDate: "2024-10-25",
        category: "Product",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Inventory Check",
        taskDescription: "Perform a physical inventory check.",
        taskDate: "2024-10-21",
        category: "Operations",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 3,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: "emp004",
    firstname: "Anjali",
    email: "employee4@example.com",
    password: "12345",
    tasks: [
      {
        taskTitle: "System Maintenance",
        taskDescription: "Carry out routine system maintenance.",
        taskDate: "2024-10-12",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "New Feature Planning",
        taskDescription: "Plan the new features for the software update.",
        taskDate: "2024-10-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Customer Support",
        taskDescription: "Assist customers with their technical issues.",
        taskDate: "2024-10-13",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Code Optimization",
        taskDescription: "Optimize the code for better performance.",
        taskDate: "2024-10-19",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
  },
  {
    id: "emp005",
    firstname: "Priya",
    email: "employee5@example.com",
    password: "12345",
    tasks: [
      {
        taskTitle: "Content Writing",
        taskDescription: "Write content for the new blog post.",
        taskDate: "2024-10-15",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize the website for SEO.",
        taskDate: "2024-10-17",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Social Media Campaign",
        taskDescription:
          "Prepare a social media campaign for the product launch.",
        taskDate: "2024-10-18",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Report",
        taskDescription: "File a report on bugs found during testing.",
        taskDate: "2024-10-19",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: "admin001",
    email: "admin@example.com",
    password: "12345",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
