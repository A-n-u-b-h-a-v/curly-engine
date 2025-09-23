const employee=[
  {
    "id": 101,
    "name": "Alice",
    "email": "alice@example.com",
    "password": "alice123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Project Kickoff",
        "description": "Initial meeting to discuss project scope.",
        "taskDate": "2024-01-05",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Design Review",
        "description": "Review the design proposals with the team.",
        "taskDate": "2024-01-12",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Submit Report",
        "description": "Submit the quarterly financial report.",
        "taskDate": "2023-12-20",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      }
    ]
  },
  {
    "id": 102,
    "name": "Bob",
    "email": "bob@example.com",
    "password": "bob123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Client Follow-up",
        "description": "Follow up with the client regarding feedback.",
        "taskDate": "2024-01-10",
        "category": "Client Interaction"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Market Research",
        "description": "Conduct market research for upcoming product launch.",
        "taskDate": "2024-01-15",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder 1",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder 2",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update Website Content",
        "description": "Revise and update the website content.",
        "taskDate": "2023-12-18",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 103,
    "name": "Charlie",
    "email": "charlie@example.com",
    "password": "charlie123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Team Presentation Preparation",
        "description": "Prepare slides for the upcoming team presentation.",
        "taskDate": "2024-01-08",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Code Review Session",
        "description": "Participate in the code review session.",
        "taskDate": "2024-01-11",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder 1",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder 2",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      }
    ]
  },
  {
    "id": 104,
    "name": "Diana",
    "email": "diana@example.com",
    "password": "diana123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Team Building Activity",
        "description": "Organize a team-building exercise for the department.",
        "taskDate": "2024-01-15",
        "category": "Team Event"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Workshop Facilitation",
        "description": "Facilitate a workshop on effective communication.",
        "taskDate": "2024-01-20",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      }
    ]
  },
  {
    "id": 105,
    "name": "Ethan",
    "email": "ethan@example.com",
    "password": "ethan123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Project Management Training",
        "description": "Attend training on project management best practices.",
        "taskDate": "2024-01-25",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Sprint Planning Meeting",
        "description": "Participate in the sprint planning meeting.",
        "taskDate": "2024-01-30",
        "category": "Agile"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder 1",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "New Task Placeholder 2",
        "description": "This is a placeholder for a new task.",
        "taskDate": "2025-01-01",
        "category": "Placeholder"
      }
    ]
  }
]


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};
