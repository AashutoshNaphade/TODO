import { Express } from 'express';
import { Todo } from '@myorg/data';

const todos: Todo[] = [{ id:1, title: 'Todo 1' }, { id:2 ,title: 'Todo 2' }];

export function addTodoRoutes(app: Express) {
	console.log(todos);
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const items = todos;
	const newId = items.reduce((id, item) => (item.id >= id ? item.id + 1 : id), 1);
	const newTodo = {
	  id:newId,
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}