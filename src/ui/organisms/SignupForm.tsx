import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { Error } from '../atoms/Error';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { Spinner } from '../atoms/Spinner';
import { SIGNUP_START, User } from '../../types/auth';

export const SignupForm = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const { loading, signupError } = useSelector((state) => state['auth']);

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

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const user: User = {
        name: name,
        password: password,
      };
      console.log(user);

      dispatch({ type: SIGNUP_START, payload: user });
    },
    [dispatch, name, password]
  );

  return (
    <Container>
      {loading && <Spinner position={{ position: 'absolute', top: '45%', left: '162px' }} />}
      <Title>新規登録</Title>
      {!!signupError ? (
        <ErrorText>
          <Error message={signupError} />
        </ErrorText>
      ) : null}
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
          <Button type="submit" disabled={loading} width="100%">
            新規登録
          </Button>
        </ButtonRow>
      </Signup>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
`;

const ErrorText = styled.div`
  margin-top: 15px;
`;

const Signup = styled.form``;

const Row = styled.div`
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  margin: 25px 0 10px;
`;
