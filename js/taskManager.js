const TaskManager = {
    // Creates a new task with the given text and priority
    createTask(text, priority) {
        return {
            text,               // The text of the task
            completed: false,   // By default, the task is not completed
            priority: `priority-${priority}`  // The priority is added as a CSS class
        };
    },

    // Deletes a task from the tasks array by its index
    deleteTask(tasks, index) {
        // Removes the task at the specified index from the tasks array
        tasks.splice(index, 1);
    },

    // Filters tasks based on the given filter ('completed', 'incomplete', or 'all')
    filterTasks(tasks, filter) {
        TaskFilter.applyFilter(tasks, filter)
    }
};
