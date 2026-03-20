import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Todo = {
  id: number;
  title: string;
};

type TodoStore = {
  todos: Todo[];
  inputValue: string;
  setInputValue: (value: string) => void;
  addTodo: () => void;
  removeTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    set => ({
      todos: [],
      inputValue: '',

      setInputValue: value => set({ inputValue: value }),

      addTodo: () =>
        set(state => {
          if (!state.inputValue.trim()) return state; // Проверяем, что input не пустой
          return {
            todos: [
              ...state.todos,
              {
                id: Date.now(),
                title: state.inputValue,
              },
            ],
            inputValue: '', // Очищаем input после добавления
          };
        }),
      removeTodo: id =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
    }),
    {
      name: 'todo-storage', // имя для localStorage
    }
  )
);

// import { create } from 'zustand';

// type CounterStore = {
//   country: string;
//   user: {
//     name: string;
//     age: number;
//   };
//   updateCountry: (country: string) => void;
//   updatedName: (name: string) => void;
// };

// export const useCounterStore = create<CounterStore>(set => ({
//   country: 'USA',
//   updateCountry: country => set({ country: country }),
//   user: {
//     name: 'John',
//     age: 30,
//   },
//   updatedName: name =>
//     set(state => ({
//       user: {
//         ...state.user,
//         name: name,
//       },
//     })),

// updatedName: name => set(() => ({
//   user: {
//     name,
//   }
// })) НЕЛЬЗЯ ТАК ДЕЛАТЬ, ПОТОМУ ЧТО ТАК МЫ ПЕРЕЗАПИСЫВАЕМ ВЕСЬ ОБЪЕКТ user И У НАС ПРОПАДАЕТ age
// }));
