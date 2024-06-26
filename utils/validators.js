export const isValidTask = (task) => task && task.title && typeof task.completed === "boolean";
