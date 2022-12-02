import React, {useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Assets from '~assets';
import {ButtonField, Gap, Phrase} from '~components/atoms';
import {Field} from '~components/molecules';
import spaces from '~constants/spaces';
import {useNavigate} from '~hooks';
import {onLogin} from '~redux/actions';
import {ApplicationState} from '~redux/reducers';
// import {Phrase} from '~components/atoms';
import styleConfig from './styles';

const SCREEN_NAME = 'Login';

interface LoginProps {}

const Login = ({}: LoginProps) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  const {authReducer} = useSelector((state: ApplicationState) => state);
  console.log('authReducer', authReducer);
  const styles = styleConfig({});
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (form.email == 'admin@gmail.com' && form.password == 'admin') {
      toast.show('Login berhasil');
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
      dispatch(onLogin());
    } else {
      toast.show('Login gagal', {type: 'danger'});
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.wrapperForm}>
          <Phrase type="heading/bold">Tanyo</Phrase>
          <Gap vertical={spaces.sm} />
          <Field
            textInputProps={{
              placeholder: 'Masukkan email',
              value: form.email,
              onChangeText: email => setForm(current => ({...current, email})),
              keyboardType: 'email-address',
              autoCapitalize: 'none',
            }}
          />
          <Gap vertical={spaces.sm} />
          <Field
            textInputProps={{
              placeholder: 'Masukkan password',
              value: form.password,
              onChangeText: password =>
                setForm(current => ({...current, password})),
              secureTextEntry: !isOpenPassword,
              autoCapitalize: 'none',
            }}
            staticLeft={{
              render: (
                <Assets.Svg.Eye type={isOpenPassword ? 'open' : 'close'} />
              ),
              action: () => setIsOpenPassword(current => !current),
            }}
          />
          <Gap vertical={spaces.sm} />
          <ButtonField onPress={handleSubmit}>Login</ButtonField>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
