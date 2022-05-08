import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Login from '../../../assets/images/Login.png';
import CustomTextInp from '../../components/CustomTextInp';
import CustomBtn  from '../../components/CustomBtn';

const {height} = Dimensions.get('screen');
export default function SignInScreen() {
  return (
    <ScrollView>
        
        <Image style={styles.logoImg} source={Login} resizeMode={'contain'} />
        
        <CustomTextInp placeholder="Name" />
        <CustomTextInp placeholder="Password" />

        <CustomBtn text="Login" type={'Primary'} />
        <CustomBtn text="Forget Password?" type={'Secondary'} />

        <CustomBtn text='Sign in with facebook' type='FaceBook' bgColor='#E7EAF4' fgColor='#4765A9' />
        <CustomBtn text='Sign in with Google' type='Google'  bgColor='#FAE9EA' fgColor='#DD4D44' />
        <CustomBtn text='Sign in with Apple' type='Apple'  bgColor='#E3E3E3' fgColor='#363636' />

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
