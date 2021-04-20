import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './LoginView.module.css';
import { login } from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
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

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.login_form} onSubmit={handleSubmit} autoComplete="off">
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
        Sign in
      </Button>
    </form>
  );
};

export default LoginView;

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handlechange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <form
//         className={s.login_form}
//         onSubmit={this.handleSubmit}
//         autoComplete="off"
//       >
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
//           Sign in
//         </Button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: login,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
