import { useTasks } from '../contexts/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  console.log(`Rendering list`);
  const tasks = useTasks();

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
};

export default TaskList;
