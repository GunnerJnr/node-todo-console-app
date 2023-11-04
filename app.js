// Initialise an empty object to store the TODO list items.
let todoList = {};

/**
 * Adds a new TODO item to the list.
 * @param {string} key - The unique identifier for the TODO item.
 * @param {string} value - The description of the TODO item.
 */
function addTodo(key, value) {
  // Assign the value to the key in the todoList object.
  // This creates a new key-value pair if the key doesn't exist,
  // or updates the value if the key already exists.
  todoList[key] = value;
}
