import { FormEvent, useEffect, useState } from "react"
import { LoginForm } from "../interface/login-form.interface";
import { useNavigate } from "react-router-dom";

export default function Login({ userId }: { userId: string }) {

	const navigate = useNavigate();
	const [idValue, setIdValue] = useState('');

	useEffect(() => {
		setIdValue(userId);
	}, [userId])

	function onInputIdValueChange(event: FormEvent<HTMLInputElement>) {
		setIdValue(event.currentTarget.value);
	}

	function onSubmit(event: FormEvent<LoginForm>) {
		event.preventDefault();
		const userId = event.currentTarget.userId.value;
		navigate(`/doclist/${userId}`);
	}

	return (
		<div className="container">
			<form
				className="form"
				onSubmit={onSubmit}
			>
				<input value={idValue} onChange={onInputIdValueChange} type="text" name="userId" placeholder="User ID" />
				<button type="submit" className="btn">Login</button>
			</form>
		</div>
	)
}