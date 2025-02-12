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

## Code Quality and Standards

This project follows strict TypeScript and ESLint configurations to ensure high-quality, maintainable, and consistent code. Below are the key conventions and rules enforced in the repository.

### TypeScript Standards

The project uses strict TypeScript settings to enforce type safety and prevent runtime errors.

#### **Strict Type Checking**
We enforce explicit return types and strict type checking to avoid implicit `any`.

```ts
function parseInput(input: string): number {
  return parseInt(input, 10);
}
```

#### **Consistent Type Imports**
All type imports are consistently formatted to improve code clarity and avoid unnecessary runtime imports.

```ts
import type { Task } from '../types/task.js';
```

#### **No Implicit Any**
All variables and function parameters must have explicit types.

```ts
function addTask(task: Task): void {
  tasks.push(task);
}
```

### ESLint Standards

The project follows a strict ESLint configuration with `@typescript-eslint`, `prettier`, and `simple-import-sort` to ensure clean and structured code.

#### **Import Sorting**
Imports are automatically sorted for consistency.

```ts
// Incorrect
import fs from 'fs';
import type { Task } from '../types/task.js';
import path from 'path';

// Correct
import type { Task } from '../types/task.js';

import fs from 'fs';
import path from 'path';
```

#### **No Unused Variables**
All declared variables must be used to avoid clutter.

```ts
// Incorrect
const unusedVariable = 'This is not used';

// Correct
const taskName = getTaskName();
console.log(taskName);
```

#### **Consistent Code Formatting**
Code formatting is enforced with Prettier.

```ts
// Incorrect
const greeting = "Hello, world";

// Correct
const greeting = 'Hello, world';
```

#### **Strict Boolean Expressions**
Boolean conditions must be explicitly checked.

```ts
// Incorrect
if (!status) {
  console.log('Invalid status');
}

// Correct
if (status === undefined || status === null) {
  console.log('Invalid status');
}
```

### Running ESLint and Auto-Fixing Issues

To check for linting errors, run:

```sh
npm run lint
```

To automatically fix issues:

```sh
npm run lint --fix
```

## Contributing  

Feel free to fork and improve the project!