import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
} from 'react';
import { initialState, tasksReducer } from '../features/tasks/tasksReducer';
import type { Task, TaskAction } from '../features/tasks/types';

export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<Dispatch<TaskAction>>(
  () => {},
);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    const fetchTasks = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?_limit=5',
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: (error as Error).message });
      }
    };

    fetchTasks();
  }, []);

  return (
    <TasksContext value={tasks.data}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
