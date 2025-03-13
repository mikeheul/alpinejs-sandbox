// The TaskFilter object is responsible for filtering tasks based on their completion status
const TaskFilter = {
    // Method to apply the filter to a list of tasks based on the filter criteria
    applyFilter(tasks, filter) {
        // If the filter is 'completed', return only tasks that are marked as completed
        if (filter === 'completed') {
            return tasks.filter(task => task.completed);
        } 
        // If the filter is 'incomplete', return only tasks that are not completed
        else if (filter === 'incomplete') {
            return tasks.filter(task => !task.completed);
        }

        // If the filter is anything else (including 'all'), return all tasks (no filtering)
        return tasks; // Default: no filtering, show all tasks
    }
};
