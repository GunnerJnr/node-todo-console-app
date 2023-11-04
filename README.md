# Node.js TODO Console Application

![GitHub top language](https://img.shields.io/github/languages/top/GunnerJnr/node-todo-console-app)
![GitHub repo size](https://img.shields.io/github/repo-size/GunnerJnr/node-todo-console-app)
![GitHub contributors](https://img.shields.io/github/contributors/GunnerJnr/node-todo-console-app)
![GitHub last commit](https://img.shields.io/github/last-commit/GunnerJnr/node-todo-console-app)
![License](https://img.shields.io/badge/license-MIT-green)

This repository houses a straightforward yet powerful TODO console application built with Node.js. It's crafted to serve as a practical introduction for those venturing into the world of backend development using JavaScript. The application demonstrates the core CRUD operations using a 'key':'value' pairing system, providing a solid foundation for understanding data manipulation and Node.js basics.

For an in-depth guide and the inspiration behind this application, check out the accompanying [blog post](https://gunnerjnr.uk/blog/understanding-nodejs-2023-guide/).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing-to-nodejs-todo-console-application)
- [Contributors](#contributors)
- [Contact](#contact)
- [License](#license)

## Features

- Add new TODO items with unique identifiers.
- Update existing TODO items.
- Delete TODO items.
- Mark TODO items as completed.
- Simple and clear console output for TODO list management.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/).

## Installation

To install the Node.js TODO Console Application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/GunnerJnr/node-todo-console-app.git
   ```

2. Navigate to the repository directory:

   ```bash
   cd node-todo-console-app
   ```

## Usage

To use the TODO Console Application, follow these steps:

1. Run the application:

   ```bash
   node app.js
   ```

2. Utilise the functions provided in the application to manage your TODO list:
   - `addTodo`: Add a new item to the list.
   - `updateTodo`: Update an existing item's description.
   - `deleteTodo`: Remove an item from the list.
   - `markComplete`: Mark an item as completed.

## Usage Examples

Here are some examples of how you can use the TODO Console Application:

```javascript
// Adding TODO items
addTodo('task1', 'Learn Node.js basics');
addTodo('task2', 'Explore VS Code extensions');
addTodo('task3', 'Set up a Node.js server');

// Displaying the TODO list after additions
console.log(todoList);
// Output: { task1: 'Learn Node.js basics', task2: 'Explore VS Code extensions', task3: 'Set up a Node.js server' }

// Updating TODO items
updateTodo('task1', 'Master Node.js');
updateTodo('task2', 'Install Node.js extensions in VS Code');
updateTodo('task3', 'Deploy a Node.js server');

// Displaying the TODO list after updates
console.log(todoList);
// Output: { task1: 'Master Node.js', task2: 'Install Node.js extensions in VS Code', task3: 'Deploy a Node.js server' }

// Deleting TODO items
deleteTodo('task1');
deleteTodo('task3');

// Displaying the TODO list after deletions
console.log(todoList);
// Output: { task2: 'Install Node.js extensions in VS Code' }

// Marking TODO items as complete
markComplete('task2');

// Displaying the TODO list after marking as complete
console.log(todoList);
// Output: { task2: 'Install Node.js extensions in VS Code (Completed)' }
```

## Contributing to Node.js TODO Console Application

To contribute to the Node.js TODO Console Application, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Contributors

Thanks to the following people who have contributed to this project:

- [@GunnerJnr](https://github.com/GunnerJnr) 📖

## Contact

If you want to contact me you can reach me at <davidgunner@gunnerjnr.uk>.

## License

This project uses the following license: [MIT](LICENSE).
