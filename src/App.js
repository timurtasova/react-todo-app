import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
    return (
        <div className="flex flex-col items-center my-10">
            <h1 className="text-2xl font-bold text-green-500 p-3">To do List</h1>
            <Form />
            <List />
        </div>
    );
}

export default App;