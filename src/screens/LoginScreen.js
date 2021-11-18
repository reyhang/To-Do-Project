import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import {colors, fonts, images} from '../constants';
import DeviceInfo from "react-native-device-info" 
import { useDispatch, useSelector} from 'react-redux';
import {hideLoader, setLanguage, setUser, toggleLoader} from "../redux/system/actions"
import I18n, { changeLanguage } from '../i18n';
import CustomView from '../components/CustomView';
import ButtonLogin from '../components/Button';
import Dropdown from '../components/Dropdown';
import axios from 'axios'
import apiConfig from '../config/apiConfig';

export default function LoginScreen() {
 
  const usernameText = I18n.t("username")
  const passwordText = I18n.t("password")
  const rememberMeText = I18n.t("rememberMe")
  const loginText = I18n.t("login")

  const dispatch = useDispatch()

  const [pageData, setPageData] = useState({
    name: 'Reyhan',
    surname:"Güney",
    password: 'html',
    title:"Mobil Developer",
    username:"aimiss",
    token:"5ac9GJdEdw8",
    mobile:"5058524163",
  });

  const onChangeText = (key, value) => {
    setPageData(page => ({...page, [key]: value}));
  };

  const [rememberMe, setrememberMe] = useState(false);

  const handleRememberMe = () => {
    void setrememberMe(remember => !remember);
  };


  const onLogin = (data) => {
   
    dispatch(toggleLoader());

    axios.post('http://31.145.39.254:6982/auth/login',{
      username:'kerim',
      password:"12345678"
    }).then(response => console.log(response.data.accessToken))
    .catch(e=>console.log(e))

    let kAdi = 'aimiss'
    let sifre = 'html' 
    if(kAdi ===data.username &&sifre ===data.password){
    dispatch(
      setUser({
        profileImg:"https://i.pinimg.com/564x/a8/d4/a0/a8d4a05ae164ed4519b3eef5acf8f10e.jpg",
        name: 'Reyhan',
        surname:"Güney",
        password: 'html',
        title:"Mobil Developer",
        username:"aimiss",
        token:"5ac9GJdEdw8",
        mobile:"5058524163",
      }),
    );
    }else{
      alert('Yanlış kullanıcı adı veya şifre')
    }
    dispatch(hideLoader());
  };


  const language = useSelector(state => state.system.language);

  const handleLanguageChange = lang => {
    if (lang) {
      dispatch(setLanguage(lang));
      changeLanguage(lang);
    }
  };


  const versionNumber = DeviceInfo.getVersion();

  
  return (
    <CustomView style={styles.container}>
    <View style={styles.innerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={images.login}
          style={styles.logo1}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <Image
          source={images.login_people}
          style={styles.logo2}
          resizeMethod="scale"
          resizeMode="contain"
        />
      </View>
      <View >
        <Input
          onChangeText={text => onChangeText("username" , text)}
          placeHolder={usernameText}
          value={pageData.username}
          icon={'mail-outline'}
          color={colors.light_pink}
          
        />
     
        <Input
          onChangeText={text => onChangeText('password', text)}
          placeHolder={passwordText}
          value={pageData.password}
          icon={'lock-outline'}
          color={colors.light_blue}
          isHidden={true}
        />
        <View style={styles.rememberMeContainer}>
          <CheckBox
            onChangeState={() => handleRememberMe()}
            checked={rememberMe}
            checkedColor={colors.dim_grey}
          />
          <Text style={styles.rememberMeText}>{rememberMeText}</Text>
          </View>
          <View >
            <ButtonLogin 
              text={loginText}
              onPress={() => onLogin({password:pageData.password,username:pageData.username})}
            />
        </View>
      </View>
    </View>
    <View style={styles.versionNumberContainer}>

    <Dropdown
            items={[
              {label: 'Türkçe', value: 'tr'},
              {label: 'English', value: 'en'},
            ]}
            value={'en'}
            placeholder="Select please."
            onValueChange={val => handleLanguageChange(val)}
          />
      <Text style={styles.versionNumberText}>{versionNumber}</Text> 
    </View>
  </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo1: {
    marginTop: 25,
    width: 180,
    height: 90,
    alignSelf: 'center',
    tintColor: colors.light_pink,
  },
  logo2: {
    marginBottom: 25,
    width: 100,
    height: 50,
    alignSelf: 'center',
    tintColor: colors.light_blue,
  },
  logoContainer: {marginBottom: 25, alignItems: 'center'},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    color: colors.dim_grey,
    marginLeft:5
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color: colors.light_grey,
  },
  versionNumberContainer:{
    paddingTop:90,
    paddingBottom:10,
    alignItems:"center",
    width:"100%"

  }
});
