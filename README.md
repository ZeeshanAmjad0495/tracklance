### TrackLance - CLI Task Tracker  

TrackLance is a command-line tool for managing tasks. It allows you to add, update, delete, and track the status of your tasks efficiently.  

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
cd tracklance
```

### 2. Install Development Dependencies (Optional)

```bash
npm install --save-dev
```

### 3. Set Up the CLI  

Create a runnable script:  

```bash
echo -e '#!/bin/bash\ntsx tasklance.ts "$@"' > tasklance
chmod +x tasklance
sudo mv tasklance /usr/local/bin/
```

Now you can use `tasklance` instead of running `tsx tasklance.ts`.  

## Usage  

### Adding a Task  

```bash
tasklance add "Buy groceries"
# Output: Task added successfully (ID: abc123)
```

### Updating a Task  

```bash
tasklance update abc123 "Buy groceries and cook dinner"
```

### Deleting a Task  

```bash
tasklance delete abc123
```

### Marking a Task as In-Progress  

```bash
tasklance mark-in-progress abc123
```

### Marking a Task as Done  

```bash
tasklance mark-done abc123
```

### Listing Tasks  

```bash
tasklance list         # All tasks  
tasklance list done    # Completed tasks  
tasklance list todo    # Pending tasks  
tasklance list in-progress # Tasks in progress  
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

## License  

MIT License.  

---

This README is now aligned with your latest changes! 🚀