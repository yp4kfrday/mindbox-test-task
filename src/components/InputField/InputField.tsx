import { ChangeEvent, useCallback } from 'react';
import styled from './InputField.module.css';

interface NewTodoFormProps {
	value: string;
	onChange: (str: string) => void;
	onKeyDown: () => void;
}

export const InputField: React.FC<NewTodoFormProps> = ({ value = '', onChange, onKeyDown }) => {
	const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		onChange(newValue);
	}, [onChange]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			onKeyDown();
		}
	};

	return (
		<span className={styled.input}>
			<input
				placeholder="Press Enter if you want to create a task"
				value={value}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				className={styled.input__box}
			/>
		</span>
	);
};
