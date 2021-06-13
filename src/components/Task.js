import { FaTrashAlt } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {

    return (
        <div className="task">
            <h3>
                {task.text} <FaTrashAlt className="trash-icon" onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
