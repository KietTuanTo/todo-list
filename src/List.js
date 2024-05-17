import { useState } from 'react';
import './App.css';

export default function TodoList({ todos, handleChange, handleDelete }) {
    return (
      <div className='center'> 
				<ul>
					{todos.map(t => (
						<li key={t.id}>
							<Todo 
								className='todo'
								todo={t}
								handleChange={handleChange}
								handleDelete={handleDelete} 
							/>
						</li>
					))}
        </ul>
			</div>
		)
}

function Todo({ todo, handleChange, handleDelete }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<>
			<input 
				type='checkbox'
				checked={todo.done}
				onChange={e => {
					handleChange({
						...todo,
						done: e.target.checked
					})
				}}
			/>
			{isEditing ? (
				<input 
					value={todo.text}
					onChange={e => {
						handleChange({
							...todo,
							text: e.target.value
						})
					}}
				/>
			) : (
				todo.text
			)}
			<button onClick={() => setIsEditing(!isEditing)}>
				{isEditing ? 'Save' : 'Edit'}
			</button>
			<button
				onClick={() => {handleDelete(todo.id)}}
			>
				Delete
			</button>
		</>
	);
}
