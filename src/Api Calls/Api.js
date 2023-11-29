import axios from "axios";

const ngrokUrl = "http://localhost:3000"; // Assuming your ngrok server is running on HTTP

export const getAllTodos = async () => {
    try {
        const response = await axios.get(`${ngrokUrl}/todos`, {
            headers: {
                'ngrok-skip-browser-warning': 'true',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching todos:", error.message);
        throw error;
    }
};

export const addATodo = async (todo) => {
    try {
        const response = await axios.post(`${ngrokUrl}/todos`, todo);
        console.log("Todo Added successfully");
        return response.data;
    } catch (error) {
        console.error("Error adding todo:", error.message);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${ngrokUrl}/todos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting todo:", error.message);
        throw error;
    }
};
