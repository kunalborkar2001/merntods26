import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import './SingleCard.css'
import { useState } from 'react';

const SingleCard = (props) => {
  const [editing, setEditing] = useState(false)

  const handleClick = (e) => {
    console.log(e.target.value);
    props.deleteTodo(e.target.value)
  }

  return (
    <div className='card'>
      <Card sx={{ maxWidth: 320, backgroundImage: "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)" }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", gap: 3, color: "green", fontSize: "0.77rem" }}>
          Starts: {props.startDate}
          <br />
          <br />
          Ends: {props.endDate}
        </CardActions>
        <CardActions>
          {editing ? (
            <>
              <Button size="small">Save</Button>
              <Button onClick={() => setEditing(false)} size="small">Cancel</Button>
            </>
          )
            :
            (
              <>
                <Button size="small" value = {props._id} onClick={handleClick}>Delete</Button>
                <Button onClick={() => setEditing(true)} size="small">Edit</Button>
              </>
            )
          }

        </CardActions>
      </Card>
    </div>
  );
}
export default SingleCard