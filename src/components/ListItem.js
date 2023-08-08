import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { removeTask, editTask } from "../store";

function ListItem({ task }) {
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setEditMode(false);
    }, [task]);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTask(task));
    };

    const handleEdit = () => {
        dispatch(editTask(task));
        setEditMode(!editMode);
    };

    return (
        <div className={`${editMode ? 'bg-green-200': 'bg-gray-100'} p-2 my-1 border border-sky-400 rounded flex justify-between items-center`}>
            <p>{task.name}</p>
            <div className="flex justify-between items-center">
                <span
                    onClick={handleEdit}
                    className="bg-blue-500 text-white p-2 cursor-pointer select-none border rounded-md mr-2"
                >
                    Edit
                </span>
                <span
                    onClick={handleDelete}
                    className="bg-red-500 text-white p-2 cursor-pointer select-none border rounded-xl"
                >
                    X
                </span>
            </div>
        </div>
    );
}

export default ListItem;