import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';

import style from './deal.module.css';

export const Deal = ({ closeModal }) => {
  const handleSubmit = (values) => {
    console.log(values);
    closeModal();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Поле обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ошибка адреса';
    }
    if (!values.name) {
      errors.name = 'Поле обязательно';
    }
    return errors;
  };

  return (
    <div className={style.deal}>
      <h2>Оформите заказ</h2>
      <Form initialValues={{ remember: true }} onFinish={handleSubmit}>
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

Deal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
