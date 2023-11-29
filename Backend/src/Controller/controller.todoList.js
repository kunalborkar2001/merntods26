const TodoList = require("../Schema/todoList.schema");

// Controller for handling GET request
const getAllTodos = async (req, res) => {
    try {
        const allTodos = await TodoList.find({});
        res.send(allTodos);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred' });
    }
};

const postRoute = async(req, res) => {
    try {
        const newTodo = req.body
        const newlyCreated = await TodoList.create(newTodo)
        res.status(201).send(newlyCreated)
    }
    catch (error) {
        console.log(error);
        res.status(500).send({Error : "An error occured"})
    }

}

const deleteTodo = async(req, res) => {
    id = req.params.id

    try {

        const existingItem = await TodoList.findById(id)

        if(!existingItem) {
            return res.status(404).json({error : "Todo not found"})
        }
        const deleteById= await TodoList.findByIdAndDelete(id)
        if(deleteById) {
            res.status(204).send()
        }
        else {
            res.status(500).json({error : "Failed To Delete 😮‍💨"})
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({error : "An Error Occurred"})
    }

}




module.exports = {
    getAllTodos,
    postRoute,
    deleteTodo
};
