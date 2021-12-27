import React from 'react';
import { Todo } from '@myorg/data';
import './todos.module.css';
import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography
}
	from '@mui/material';

export interface TodosProps {
	todos: Todo[];
}

export function Todos(props: TodosProps) {
	return (
		<>
			<Typography component="h1" variant="h4" align="center">
				To Do List
			</Typography>
			<React.Fragment>
				<List>
					{props.todos.map((t) => (
						<ListItem key={t.id} disablePadding sx={{ width: '100%' }}>
							<ListItemButton>
								<ListItemText className={'todo'} primary={t.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</React.Fragment>
		</>
	);
}

export default Todos;