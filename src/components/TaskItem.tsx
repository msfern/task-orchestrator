import { memo } from 'react';
import type { Task } from '../features/tasks/types';
import { useTasksDispatch } from '../contexts/TaskContext';

const TaskItem = memo(({ task }: { task: Task }) => {
  console.log(`Rendering: ${task.title}`);
  const dispatch = useTasksDispatch();
  return (
    <li>
      <span>{task.title}</span>
      <button
        onClick={() =>
          dispatch({
            type: 'TOGGLE_TASK_COMPLETION',
            payload: { id: task.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'DELETE_TASK', payload: { id: task.id } })
        }
      >
        Delete
      </button>
    </li>
  );
});

export default TaskItem;
