import { useSelector } from 'react-redux';
import ListItem from './ListItem';

function List() {
    const tasks = useSelector((state) => {
        return state.tasks.data;
    });
    
    const renderedTasks = tasks.map(task => {
        return <ListItem key={task.id} task={task} />;
    });

    return (
        <div className="w-4/5 my-3">
            {renderedTasks}
        </div>
    );
}

export default List;