import { useDispatch } from "react-redux";
import { removeTask } from "../store";

function ListItem({ task }) {
    const dispatch = useDispatch();

    const handleDelete = () => {   
        dispatch(removeTask(task));
    };

    return (
        <div className="bg-gray-100 p-2 my-1 border border-sky-400 rounded flex justify-between items-center">
            <p>{task.name}</p>
            <span 
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 cursor-pointer select-none border rounded-xl"
            >
            X
            </span>
        </div>
    );
}

export default ListItem;