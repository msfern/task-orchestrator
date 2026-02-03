import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './contexts/TaskContext';

function App() {
  return (
    <TaskProvider>
      <h1>Task Orchestrator</h1>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
