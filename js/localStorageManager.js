const LocalStorageManager = {
    // Loads tasks from localStorage
    loadTasks() {
        // Retrieves the 'tasks' data from localStorage and parses it from JSON
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        // If tasks exist, return them, otherwise return an empty array
        return tasks ? tasks : [];
    },

    // Saves tasks to localStorage
    saveTasks(tasks) {
        // Converts the tasks array into a JSON string and stores it in localStorage under the 'tasks' key
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
};
