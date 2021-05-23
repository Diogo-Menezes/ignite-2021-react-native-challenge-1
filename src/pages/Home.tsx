import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { darkColors, lightColors } from '../theme/colors';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

enum ThemeColors {
  dark = 'dark',
  light = 'light',
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [themeColors, setThemeColors] = useState<ThemeColors>(
    ThemeColors.light
  );

  const [colors, setColors] = useState(
    themeColors === ThemeColors.light ? lightColors : darkColors
  );

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
        task.id === id ? { ...task, done: !task.done } : task
      );

      setTasks(newTasks);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  function handleChangeThemeColors() {
    if (themeColors === ThemeColors.light) {
      setThemeColors(ThemeColors.dark);
    } else {
      setThemeColors(ThemeColors.light);
    }
  }

  React.useEffect(() => {
    if (themeColors === ThemeColors.light) {
      setColors(lightColors);
    } else {
      setColors(darkColors);
    }
  }, [themeColors]);

  return (
    <>
      <Header onChangeTheme={handleChangeThemeColors} colors={colors} />
      <TodoInput addTask={handleAddTask} colors={colors} />
      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        colors={colors}
      />
    </>
  );
}
