import { Story, Meta } from '@storybook/react';
import { Todos, TodosProps } from './todos';

export default {
  component: Todos,
  title: 'Todos',
} as Meta;

const todos = [
	{id: 1, title: 'Buy Potato' },
	{id: 2, title: 'Walk a Dog.' },
	{id: 3, title: 'Watch xyz Movie.' },
];

const Template: Story<TodosProps> = (args) => <Todos {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	todos
}
