export const fetchTasks = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log("🚀 ~ fetchTasks ~ response:", response);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    return []; // Return empty array or handle gracefully based on app logic
  }
};
