let tasks = [];

// Function to add a new task
function addTask(id, name, description) {
  const task = { id, name, description };
  tasks.push(task);
  console.log('Task added:', task);
}

// Function to view all tasks
function viewTasks() {
  console.log('Tasks:', tasks);
}

// Function to update a task
function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
    console.log('Task updated:', task);
  } else {
    console.log('Task not found');
  }
}

// Function to delete a task
function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    const removedTask = tasks.splice(taskIndex, 1);
    console.log('Task deleted:', removedTask[0]);
  } else {
    console.log('Task not found');
  }
}

// Example usage
addTask(1, 'Buy groceries', 'Milk, eggs, bread, and butter');
addTask(2, 'Finish project', 'Complete the project report by Friday');
viewTasks();
updateTask(1, 'Buy groceries and more', 'Milk, eggs, bread, butter, and cheese');
viewTasks();
deleteTask(2);
viewTasks();
