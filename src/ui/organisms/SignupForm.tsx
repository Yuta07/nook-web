import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import store from '../../reducers';
import { SIGNUP_START, User } from '../../types/auth';

export const SignupForm = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user: User = {
      name: name,
      password: password,
    };
    console.log(user);

    store.dispatch({ type: SIGNUP_START, payload: user });
  };

  return (
    <Container>
      <Title>新規登録</Title>
      <Signup onSubmit={handleSubmit}>
        <Row>
          <Label label="ユーザー名" />
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="nook@gmail.com"
            border={false}
            width="100%"
            handleInputChange={handleInputChange}
          />
        </Row>
        <Row>
          <Label label="パスワード" />
          <Input
            type="text"
            name="password"
            value={password}
            placeholder="nookN123"
            border={false}
            width="100%"
            handleInputChange={handleInputChange}
          />
        </Row>
        <ButtonRow>
          <Button type="submit" width="100%">
            新規登録
          </Button>
        </ButtonRow>
      </Signup>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
`;

const Signup = styled.form``;

const Row = styled.div`
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  margin: 25px 0 10px;
`;
