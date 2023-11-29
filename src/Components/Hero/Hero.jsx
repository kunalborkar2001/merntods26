import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { getAllTodos } from '../../Api Calls/Api';
import SingleCard from '../Card/SingleCard'
import { useState } from 'react';
import { useEffect } from 'react';
import "./hero.css"
import { deleteTodo } from '../../Api Calls/Api';

const Hero = () => {
    const [allTodos, setAllTodos] = useState([]);

    const todoData = async () => {
        try {
            const response = await getAllTodos();
            setAllTodos(response);
        } catch (error) {
            console.error('Error fetching todos:', error);
            // Handle the error appropriately (e.g., show a message to the user)
        }
    };

    let dateFormat = (date) => {
        const formattedDate = date.toLocaleString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "UTC",
        });
        return formattedDate
    }

    useEffect(() => {
        const getTodosFromTheServer = async () => {
            await todoData();
        };
        getTodosFromTheServer();
    }, []);

    useEffect(() => {
        // console.log(allTodos);
    })

    const handleDelete = async(e) => {
        await deleteTodo(e)
        let undeleted = allTodos.filter((elem) => elem._id != e)
        
        setAllTodos(undeleted)
    }

    

    return (
        <div className='hero'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {Array.isArray(allTodos) && allTodos.length > 0 ? (
                        allTodos.map((elem) => (
                            <Grid key={elem._id} xs={6} lg={3} md={4} sm={6} >
                                <SingleCard _id={elem._id} name={elem.name} description={elem.description} startDate={dateFormat(new Date(elem.startDate))}
                                    endDate={dateFormat(new Date(elem.endDate))} completed={elem.completed} deleteTodo={handleDelete}/>
                            </Grid>
                        ))
                    ) : (
                        <div>No todos available</div>
                    )}
                </Grid>
            </Box>
        </div>

    )
}

export default Hero