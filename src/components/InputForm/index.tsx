import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import * as S from './styles';

import {
  Input
} from '@components/index';

interface IProps extends TextInputProps {
  name: string;
  error: string | any;
  control: Control | any;
}

function InputForm({
  name,
  error,
  control,
  ...props
}: IProps) {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            {...props}
          />
        )}
      />
      {error &&
        <S.Error>{error}</S.Error>
      }
    </S.Container>
  )
}

export default InputForm;
