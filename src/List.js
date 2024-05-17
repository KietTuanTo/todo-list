import { useState } from 'react';

export default function TodoList({ todos, handleChange, handleDelete }) {
    return (
      <> 
				<ul>
					{todos.map(t => (
						<li key={t.id}>
							<Todo 
								todo={t}
								handleChange={handleChange}
								handleDelete={handleDelete} 
							/>
						</li>
					))}
        </ul>
			</>
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
