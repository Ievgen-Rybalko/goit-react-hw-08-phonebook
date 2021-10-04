//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';

import { Form, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.css';

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500,
  },
  h1: {
    paddingLeft: '150px',
  },
  error: {
    textAlign: 'left',
    paddingLeft: '150px',
  },
};

// const styles = {
//   form: {
//     marginLeft: 'auto',
//     marginRight: 'auto',

//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

export default function LoginView() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const errorAuth = useSelector(authSelectors.getErrorAuth);

  const onFinish = values => {
    // setEmail(values.email);
    // setPassword(values.password);
    const credentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(authOperations.logIn(credentials));
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   dispatch(authOperations.logIn({ email, password }));
  //   // setEmail('');
  //   // setPassword('');
  // };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Login page</h1>
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      {errorAuth && (
        <div style={styles.error}>
          <Alert
            message="Error"
            description={`Check for all fields to be filled correctly! \n ${errorAuth}`}
            type="error"
            showIcon
          />{' '}
        </div>
      )}
    </div>
  );
  // return (
  //     <div style= {styles.container}>
  //       <h1>Страница логина</h1>

  //       <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
  //         <label style={styles.label}>
  //           Почта
  //           <input
  //             type="email"
  //             name="email"
  //             value={email}
  //             onChange={handleChange}
  //           />
  //         </label>

  //         <label style={styles.label}>
  //           Пароль
  //           <input
  //             type="password"
  //             name="password"
  //             value={password}
  //             onChange={handleChange}
  //           />
  //         </label>

  //         <button type="submit">Войти</button>
  //       </form>
  //     </div>
  //   );
}
