import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

export const LoginForm = () => {
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

    console.log(name, password);
  };

  return (
    <Container>
      <Title>ログイン</Title>
      <Login onSubmit={handleSubmit}>
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
      </Login>
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

const Login = styled.form``;

const Row = styled.div`
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  margin: 25px 0 10px;
`;
