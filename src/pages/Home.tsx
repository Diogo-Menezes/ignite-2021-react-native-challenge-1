import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevState: Task[]) => [...prevState, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const task = tasks.find(task => task.id === id);

    if (task && !task.done) {
      const newTasks = tasks.map(task =>
        task.id === id ? { ...task, done: true } : task
      );

      setTasks(newTasks);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
