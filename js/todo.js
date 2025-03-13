// The main function for the Todo app
function todoApp() {
    return {
        // Properties that hold the state of the application
        newTaskText: '', // The text input for the new task
        newTaskPriority: 'low', // The selected priority for the new task
        filter: 'all', // The filter type (all, completed, or incomplete)
        tasks: LocalStorageManager.loadTasks(), // Load the tasks from localStorage or initialize an empty list

        // Method to add a new task
        addTask() {
            // Check if the task text is valid using TaskValidation before proceeding
            if (!TaskValidation.isValidTaskText(this.newTaskText)) return;  // If invalid, exit the method

            // Create a new task using the TaskManager
            const newTask = TaskManager.createTask(this.newTaskText, this.newTaskPriority);

            // Add the new task to the tasks array
            this.tasks.push(newTask);

            // Reset the task input field
            this.resetNewTaskText();

            // Save the updated tasks list to localStorage
            this.saveToLocalStorage();
        },

        // Method to delete a task by its index
        deleteTask(index) {
            // Delete the task using TaskManager
            TaskManager.deleteTask(this.tasks, index);

            // Save the updated tasks list to localStorage
            this.saveToLocalStorage();
        },

        // Method to toggle the completion status of a task
        toggleTaskCompletion(index) {
            // Toggle the completion state of the task using TaskStateManager
            TaskStateManager.toggleCompletion(this.tasks[index]);
            // Save the updated tasks list to localStorage
            this.saveToLocalStorage();
        },

        // Method to save the tasks list to localStorage
        saveToLocalStorage() {
            // Save the tasks list in the localStorage using LocalStorageManager
            LocalStorageManager.saveTasks(this.tasks);
        },

        // Method to apply a filter to the tasks
        filteredTasks() {
            // Apply the filter to the tasks using TaskFilter
            return TaskFilter.applyFilter(this.tasks, this.filter);
        },

        // Method to reset the input field for the new task
        resetNewTaskText() {
            // Clear the task input text field
            this.newTaskText = '';
        }
    };
}