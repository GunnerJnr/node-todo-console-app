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

/**
* Updates the description of an existing TODO item.
* @param {string} key - The unique identifier for the TODO item to update.
* @param {string} newValue - The new description for the TODO item.
*/
function updateTodo(key, newValue) {
  // Check if the TODO item exists in the list by its key.
  if (todoList[key]) {
      // Update the value associated with the key to the new value.
      todoList[key] = newValue;
  }
}
