// The TaskStateManager object manages the completion state of tasks
const TaskStateManager = {
    // Method to toggle the completion state of a task (mark as done or not done)
    toggleCompletion(task) {
        // If the task is completed, set it to false (not completed), and vice versa
        task.completed = !task.completed;
    },

    // Method to explicitly set the completion state of a task
    setCompletion(task, completed) {
        // Set the task's completion state to the provided 'completed' value (true or false)
        task.completed = completed;
    }
};
