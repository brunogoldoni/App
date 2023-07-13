import React from 'react';
import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import { Button, InputForm } from "@components/index";
import { INavigation } from "@screens/types";

interface IForm {
  email: string;
  password: number;
};

import * as GS from "../styles";
import * as S from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.number()
    .typeError('Informe um valor numérico')
    .required('Senha é obrigatório')
})

function Login({ navigation }: INavigation) {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function handleLogin(form: IForm) {
    if (!form.email)
      return Alert.alert('Ops...', 'Campo e-mail é obrigatório.')

    if (!form.password)
      return Alert.alert('Ops...', 'Campo senha é obrigatório.')

    if (form.email === 'brgoldoni@gmail.com' && form.password === 123123)
      navigation.navigate("home");
    else
      return Alert.alert('Ops...', 'e-mail e/ou senha incorretos, verifique seus dados inseridos e tente novamente.')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GS.Container>
        <S.Header>
          <GS.Title>Login</GS.Title>
          <GS.SubTitle>
            realize seu login para ter acesso a todas as funcionalidades do nosso{" "}
            <S.HighlightText>App</S.HighlightText>.
          </GS.SubTitle>
        </S.Header>

        <S.Body>
          <InputForm
            name="email"
            control={control}
            autoCorrect={false}
            returnKeyType='next'
            autoCapitalize='none'
            placeholder="Digite seu email"
            error={errors.email && errors.email.message}
          />

          <InputForm
            name="password"
            control={control}
            returnKeyType='send'
            keyboardType='numeric'
            placeholder="Digite sua senha"
            error={errors.password && errors.password.message}
          />
        </S.Body>

        <S.Footer>
          <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
        </S.Footer>
      </GS.Container>
    </TouchableWithoutFeedback>
  );
}

export default Login;
