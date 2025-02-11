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
echo -e '#!/bin/bash\ntsx tracklance.ts "$@"' > tracklance
chmod +x tracklance
sudo mv tracklance /usr/local/bin/
```
Now you can use `tracklance`.  
Or just use `tsx tracklance.ts ... [options] [options]`

## Usage  

### Adding a Task  

```bash
tracklance add "Buy groceries"
# Output: Task added successfully (ID: abc123)
```

### Updating a Task  

```bash
tracklance update abc123 "Buy groceries and cook dinner"
```

### Deleting a Task  

```bash
tracklance delete abc123
```

### Marking a Task as In-Progress  

```bash
tracklance mark-in-progress abc123
```

### Marking a Task as Done  

```bash
tracklance mark-done abc123
```

### Listing Tasks  

```bash
tracklance list         # All tasks  
tracklance list done    # Completed tasks  
tracklance list todo    # Pending tasks  
tracklance list in-progress # Tasks in progress  
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