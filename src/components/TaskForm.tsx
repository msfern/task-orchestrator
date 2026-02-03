import { memo, useState, type SubmitEvent } from 'react';
import { useTasksDispatch } from '../contexts/TaskContext';

const TaskForm = () => {
  console.log(`Rendering form`);
  const [value, setValue] = useState('');
  const dispatch = useTasksDispatch();

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddTask = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      payload: { title: value, priority: 'medium' },
    });
    setValue('');
  };

  return (
    <form onSubmit={(e) => handleAddTask(e)}>
      <input
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={onChangeText}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default memo(TaskForm);
