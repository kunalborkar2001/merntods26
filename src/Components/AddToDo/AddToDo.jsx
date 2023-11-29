import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';
import { addATodo } from '../../Api Calls/Api';

import './AddToDo.css';

const AddToDo = (props) => {
    const [displayTodoBox, setDisplayTodoBox] = useState(props.todoBox)
    const [todoData, setTodoData] =useState({
        "name" : "" ,
        "description" : "",
        "startDate" : null,
        "endDate" : null,
        "completed" : false
    })



    useEffect(() => {
        setDisplayTodoBox(props.todoBox)
    }, [props.todoBox]);



    const handleAdd = async() => {
        await addATodo(todoData)

        setDisplayTodoBox(false)
        props.handleAddTodo()
    }

    return (
        <div style={{ display: displayTodoBox ? 'block' : 'none' }}>
            <div className='addToDo' >
                <TextField id="demo-helper-text-misaligned-no-helper" label="Name" sx={{ "width": "90%" }} value={todoData.name} onChange={(e) => setTodoData({...todoData,name : e.target.value})}/>
                <TextField id="demo-helper-text-misaligned-no-helper1" label="Description" sx={{ "width": "90%" }} value={todoData.description} onChange={(e) => setTodoData({...todoData, description : e.target.value})}/>
                
                Start Date :
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <Stack spacing={2} sx={{ minWidth: 305, "width": "90%" }} >
                        <DateTimePicker
                            value={todoData.startDate}
                            onChange={(e) => setTodoData({...todoData, startDate : e.format('YYYY-MM-DD HH:mm:ss')})}
                            referenceDate={dayjs(new Date)}
                        />
                    </Stack>
                </LocalizationProvider>

                End Date :
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <Stack spacing={2} sx={{ minWidth: 305, "width": "90%" }} >
                        <DateTimePicker
                            value={todoData.endDate}
                            onChange={(e) => setTodoData({ ...todoData, endDate: e.format('YYYY-MM-DD HH:mm:ss')})}
                            referenceDate={dayjs(new Date)}
                        />
                    </Stack>
                </LocalizationProvider>
                <Button variant="contained" onClick={handleAdd}>Add</Button>
            </div>
        </div>
    );
};

export default AddToDo;
