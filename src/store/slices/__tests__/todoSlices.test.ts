import { addTodo, removeTodo, toggleTodoComplete } from '../todoSlices';
import todoReducer from '../todoSlices';
describe('todoSlice reducers', () => {
	it('should handle adding a new todo', () => {
		const initialState = { list: [], completedList: [] };
		const nextState = todoReducer(initialState, addTodo('New Todo'));

		expect(nextState.list.length).toBe(1);
		expect(nextState.list[0].title).toBe('New Todo');
		expect(nextState.list[0].completed).toBe(false);
	});

	it('should handle removing a todo', () => {
		const initialState = {
			list: [{ id: '1', title: 'Test Todo 1', completed: false }],
			completedList: [],
		};
		const nextState = todoReducer(initialState, removeTodo('1'));

		expect(nextState.list.length).toBe(0);
		expect(nextState.completedList.length).toBe(0);
	});

	it('should handle toggling a todo', () => {
		const initialState = {
			list: [{ id: '1', title: 'Test Todo 1', completed: false }],
			completedList: [],
		};
		const nextState = todoReducer(initialState, toggleTodoComplete('1'));

		// Ожидаем, что состояние задачи изменилось
		expect(nextState.list.length).toBe(0);
		expect(nextState.completedList.length).toBe(1);
		expect(nextState.completedList[0].id).toBe('1');
		expect(nextState.completedList[0].completed).toBe(true);
	});
});