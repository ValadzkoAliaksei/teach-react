import { Button, Checkbox, Form, Input } from 'antd';

import style from './deal.module.css';

type DealPropsType = {
  closeModal: () => void;
};

type initialFormValuesType = {
  remember: boolean;
  username: string;
  password: string;
  email: string;
};

type FormErrorsType = {
  username?: string;
  email?: string;
};

export const Deal = ({ closeModal }: DealPropsType) => {
  const initialFormValues: initialFormValuesType = {
    remember: true,
    username: '',
    password: '',
    email: '',
  };
  const handleSubmit = (values: initialFormValuesType) => {
    console.log(values);
    closeModal();
  };

  const validate = (values: initialFormValuesType) => {
    const errors = {} as FormErrorsType;
    if (!values.email) {
      errors.email = 'Поле обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ошибка адреса';
    }
    if (!values.username) {
      errors.username = 'Поле обязательно';
    }
    return errors;
  };

  return (
    <div className={style.deal}>
      <h2>Оформите заказ</h2>
      <Form initialValues={initialFormValues} onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
