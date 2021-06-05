import { FaTrashAlt } from 'react-icons/fa'

const Task = ({ task }) => {

    return (
        <div className="task">
            <h3>
                {task.text} <FaTrashAlt className="trash-icon"/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
