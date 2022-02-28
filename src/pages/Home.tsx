import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title: newTaskTitle,
      done: false,
    };
    if (newTask.title === "") {
      return;
    }

    setTasks([...tasks].concat(newTask));
  }

  function handleToggleTaskDone(id: number) {
    const taskDone = [...tasks].map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(taskDone);
  }

  function handleRemoveTask(id: number) {
    const filterDeleteTask = [...tasks].filter((task) => task.id !== id);
    setTasks(filterDeleteTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />
      <TodoInput addTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
