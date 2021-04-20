import s from './RegisterView.module.css';
import { register } from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // сетим каждый по отдельности
  // const handleChangeName = e => {
  //   setName(e.target.value);
  // };

  // const handleChangeEmail = e => {
  //   setEmail(e.target.value);
  // };

  // const handleChangePassword = e => {
  //   setPassword(e.target.value);
  // };

  // сетим все в одной ф-ции
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Field type ${name} is not processed`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
    // onRegister();

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form
      className={s.register_form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
      </label>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </form>
  );
};

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handlechange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <form
//         className={s.register_form}
//         onSubmit={this.handleSubmit}
//         autoComplete="off"
//       >
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handlechange}
//           ></input>
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handlechange}
//           ></input>
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handlechange}
//           ></input>
//         </label>
//         <Button variant="primary" type="submit">
//           Sign up
//         </Button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
export default RegisterView;
