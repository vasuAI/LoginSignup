import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useCallback} from 'react';
import LoginIcon from '../../../assets/images/Login.png';
import CustomTextInp from '../../components/CustomTextInp';
import CustomBtn from '../../components/CustomBtn';
import {useNavigation} from '@react-navigation/native';
import auth from '../../../firebase'

const {height} = Dimensions.get('screen');
export default function SignInScreen() {
  const [inp, setInp] = React.useState({
    email:'',
    password:''
  })
  const navigation = useNavigation();
  const onLoginPress = () => {
    // auth.createUserWithEmailAndPassword(inp.email, inp.password)
    // .then(usrCreditials=>{
    //   const user = usrCreditials.user
    //   console.log(user);
    // })
    // .catch(err=>alert(err.message))


    navigation.navigate('HomeScreen')
  };


  return (
    <ScrollView>
      <Image style={styles.logoImg} source={LoginIcon} resizeMode={'contain'} />

      <CustomTextInp placeholder="Email" setInp={setInp} inp={inp}/>
      <CustomTextInp placeholder="Password" setInp={setInp} inp={inp} />

      <CustomBtn text="Login" type={'Primary'} onPress={onLoginPress} />
      <CustomBtn text="Forget Password?" type={'Secondary'} />

      <CustomBtn
        text="Sign in with facebook"
        type="FaceBook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomBtn
        text="Sign in with Google"
        type="Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomBtn
        text="Sign in with Apple"
        type="Apple"
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  logoImg: {
    width: '70%',
    alignSelf: 'center',
    height: height * 0.25,
  },
});
