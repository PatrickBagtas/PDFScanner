import { Link, useNavigate } from "react-router-dom"
import { RegistrationForm } from "../interface/registration-form.interface"
import { UserService } from "../services/user.service";
import { User } from "../interface/user.interface";
import { FormEvent } from "react";


export default function Register({ setUserId }: { setUserId: (x: string) => void }) {

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<RegistrationForm>) {
    event.preventDefault();
    const username = event.currentTarget.usernameElem.value;
    const password = event.currentTarget.passwordElem.value;
    UserService.createUser(username, password)
      .then((user: User) => {
        setUserId(user.id.toString());
        navigate('/login');
      });
  }

  return (
    <div className="container">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="password" placeholder="Password" />
        <button type="submit" className="btn">Register</button>
        <Link to={`/Login`}><p className="message">Already registered?</p></Link>
      </form>
    </div>
  )
}