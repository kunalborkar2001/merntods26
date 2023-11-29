import "./navbar.css"


const Navbar = (props) => {
  return (
    <div className='navbar'>
        <img className="logo" src="https://media.tenor.com/Mos3BAm5aTcAAAAC/checklist-task.gif" alt="kunalborkar2001@gmail.com" />
        <ul>
            <li onClick={props.handleAddTodo}>Add Todo</li>
            <li>Contact Us</li>
            <li>Help</li>
        </ul>
    </div>
  )
}

export default Navbar