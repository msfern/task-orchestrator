import type { TaskAction, TaskState } from './types';

export const initialState: TaskState = {
  data: [],
  loading: false,
  error: null,
};

export function tasksReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        data: [
          ...state.data,
          {
            ...action.payload,
            id: crypto.randomUUID(),
            completed: false,
          },
        ],
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload.id),
      };
    }
    case 'TOGGLE_TASK_COMPLETION': {
      return {
        ...state,
        data: state.data.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    }
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${(action as TaskAction).type}`);
    }
  }
}
