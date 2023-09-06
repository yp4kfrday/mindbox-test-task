import styled from './InputField.module.css'

interface NewTodoFormProps {
    value: string,
    updateText: (str: string) => void,
    handleAction: () => void,
}

const InputField: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleAction();
      }
    };
  
    return (
      <span className={styled.input}>
        <input
          placeholder="new todo"
          value={value}
          onChange={(e) => updateText(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styled.input__box}
        />
      </span>
    );
  };

export { InputField }