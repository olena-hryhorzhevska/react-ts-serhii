import axios from 'axios';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export default function UseMutation() {

  // ❗️CREATE DATA - POST REQUEST
  // const newTodo = {
  //   title: 'New Todo',
  //   completed: false,
  // }

  // axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
  //   .then(response => console.log(response.data))
  //   .catch(error => console.log(error));


  // ❗️UPDATE DATA - PUT/PATCH REQUEST
  // const toDoId = 1;
  // const updatedTodo = {
  //   title: 'Updated Todo',
  //   completed: true,
  // }

  // axios.patch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`, updatedTodo)
  //   .then(response => console.log(response.data))
  //   .catch(error => console.log(error));
  

  // ❗️DELETE DATA - DELETE REQUEST
  // const toDoId = 1;
  // axios.delete(`https://jsonplaceholder.typicode.com/todos/${toDoId}`)
  //   .then(response => console.log(response.data))
  //   .catch(error => console.log(error));

  // ❗️useMutation({
  //   mutationFn: async (data) => {
  //     // HTTP-request
  //   }
  //   onSuccess: (data) => {
  //     // Do something with the response data
  //   }
  //   onError: (error) => {
  //     // Handle the error
  //   }
  // })

  type Todo = {
    title: string;
    completed: boolean;
  }

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newTodo: Todo) => {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      return response.data;
    },
    onSuccess: (data, variables) => {
      console.log('Todo created successfully!');
      console.log(data);
      console.log(variables);
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: () => {
      console.log('Error creating todo!');
    }
  })

  const handleCreateTodo = () => {
    mutation.mutate({
      title: 'We created a new todo',
      completed: false,
    });
  }
  


  // ❗️FETCH VARIANT
  // type Todo = {
  //   title: string;
  //   completed: boolean;
  // };

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: async (newTodo: Todo) => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newTodo),
  //     })
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   },

  //   onSuccess: (data, variables) => {
  //     console.log('Todo created successfully!');
  //     console.log(data);
  //     console.log(variables);
  //     queryClient.invalidateQueries({ queryKey: ['todos'] });
  //   },

  //   onError: () => {
  //     console.log('Error creating todo!');
  //   },
  // });

  // const handleCreateTodo = () => {
  //   mutation.mutate({
  //     title: 'We created a new todo',
  //     completed: false,
  //   });
  // };


  return (
    <>
      {/* CRUD (Create, Read, Update, Delete) - Mutations */}
      {/* Post - Create
      Get - Read
      Put/Patch - Update
      Delete - Delete */}

      <button onClick={handleCreateTodo}>Create Todo</button>
      {mutation.isPending && <p>Creating todo...</p>}
      {mutation.isError && <p>Error creating todo: {(mutation.error as Error).message}</p>}
      {mutation.isSuccess && <p>Todo created: {JSON.stringify(mutation.data)}</p>}
    </>
  );
}
