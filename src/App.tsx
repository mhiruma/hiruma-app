import { MantineProvider, Text } from '@mantine/core';
import { TodoListPage } from './components/pages/TodoListPage';
import { TodoList } from './components/parts/TodoList';
import { INITIAL_TODO_LIST_DATA } from './data/initialTodoListData';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TodoListPage/>
    </MantineProvider>
  );
}