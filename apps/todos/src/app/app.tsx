import { useEffect, useState } from 'react';
import './app.module.css';
import {
	Button,
	Typography,
	Container,
	Paper,
	Box,
	Divider,
	AppBar,
	Toolbar,
	IconButton
}
	from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Todo } from '@myorg/data';
import { Todos } from '@myorg/ui';


//interface Todo {
//	title: string;
//}

export function App() {
	//const [todos, setTodos] = useState<Todo[]>([
	//	{ title: 'Todo 1' },
	//	{ title: 'Todo 2' }
	//]);

	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		fetch('/api/todos')
			.then((_) => _.json())
			.then(setTodos);
	}, []);

	function addTodo() {
		fetch('/api/addTodo', {
			method: 'POST',
			body: '',
		})
			.then((_) => _.json())
			.then((newTodo) => {
				setTodos([...todos, newTodo]);
			});
	}

	//function addTodo() {
	//	setTodos([
	//		...todos,
	//		{
	//			title: `New todo ${Math.floor(Math.random() * 1000)}`,
	//		},
	//	]);
	//}

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							My Org
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
					<Todos todos={todos} />
					<Divider />
					<Box
						sx={{
							textAlign: 'right',
						}}
					>
						<Button id={'add-todo'} sx={{ m: 2 }} variant="contained" onClick={addTodo}>
							Add Todo
						</Button>
					</Box>
				</Paper>
			</Container>
		</>
	);
}

export default App;
