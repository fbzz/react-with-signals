import { computed, signal } from "@preact/signals-react";

export interface Todo {
  label: string;
  done: boolean;
}

export const createState = () => {
  const listName = signal("");
  const todos = signal<Todo[]>([
    { label: "Take the dog for a walk", done: false },
  ]);
  const draftTodo = signal("");

  const todosLength = computed(() => {
    return todos.value.length;
  });

  const addTodo = (label: string) => {
    todos.value = [...todos.value, { label: label, done: false }];
  };

  const removeTodo = (index: number) => {
    todos.value.splice(index, 1);
    todos.value = [...todos.value];
  };

  const resetDraft = () => {
    draftTodo.value = "";
  };

  return {
    todos,
    todosLength,
    addTodo,
    listName,
    draftTodo,
    removeTodo,
    resetDraft,
  };
};
