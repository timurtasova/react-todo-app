import './App.css';
import { useSelector } from 'react-redux';
import Form from './components/Form';
import List from './components/List';

function App() {
    const { initialValue, tasks } = useSelector(state => {
        return {
            initialValue: state.tasks.initialValue,
            tasks: state.tasks.data
        };
    });

    return (
        <div className="flex flex-col items-center my-10">
            <h1 className="text-4xl font-bold text-green-500 p-3">To do List</h1>
            <Form initialValue={initialValue} />
            {
                tasks.length < 1 ?
                <h3 className="font-bold text-xl text-green-500 my-5">Add Some Task</h3> : <List />
            }
        </div>
    );
}

export default App;