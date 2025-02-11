### Tracklance - CLI Task Tracker  

Tracklance is a command-line tool for managing tasks. It allows you to add, update, delete, and track the status of your tasks efficiently.  

📌 **Project URL:** [Task Tracker Roadmap](https://roadmap.sh/projects/task-tracker)  

## Features  

✅ Add, update, and delete tasks  
✅ Mark tasks as **in-progress** or **done**  
✅ List all tasks or filter by status  
✅ Stores tasks in a JSON file (`tasks.json`)  

## Installation  

### 1. Clone the Repository  

```bash
git clone https://github.com/ZeeshanAmjad0495/tracklance.git
cd  tracklance
```

### 2. Install Development Dependencies (Optional - For Development)

```bash
npm install --save-dev
```


## Usage  

### Adding a Task  

```bash
tsx tracklance.ts add "Buy groceries"
# Output: Task added successfully (ID: abc123)
```

### Updating a Task  

```bash
tsx tracklance.ts update abc123 "Buy groceries and cook dinner"
```

### Deleting a Task  

```bash
tsx tracklance.ts delete abc123
```

### Marking a Task as In-Progress  

```bash
tsx tracklance.ts mark-in-progress abc123
```

### Marking a Task as Done  

```bash
tsx tracklance.ts mark-done abc123
```

### Listing Tasks  

```bash
tsx tracklance.ts list         # All tasks  
tsx tracklance.ts list done    # Completed tasks  
tsx tracklance.ts list todo    # Pending tasks  
tsx tracklance.ts list in-progress # Tasks in progress  
```

## Sample Data  

A sample `tasks.json` file:  

```json
[
  {
    "id": "gkdpn95e5qg",
    "description": "Write code",
    "status": "done",
    "createdAt": "2025-02-10T15:30:56.057Z",
    "updatedAt": "2025-02-11T10:09:14.782Z"
  }
]
```

## Contributing  

Feel free to fork and improve the project!  
