// The TaskValidation object contains methods for validating tasks
const TaskValidation = {
    // Method to check if the task text is valid
    isValidTaskText(text) {
        // Trim any leading/trailing whitespace and check if the text is not empty
        return text.trim() !== '';  // Returns true if the text is not empty, false otherwise
    }
};
