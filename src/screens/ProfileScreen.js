import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
import {ScrollView, Switch} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonLogout} from '../components/Button';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import {colors, fonts} from '../constants';
import {setTheme, userLogout} from '../redux/system/actions';
import {GetIsDarkMode, GetUserInfo} from '../redux/system/selector';
import I18n from '../i18n/index';

export default function ProfileScreen() {
  const isDarkMode = GetIsDarkMode();
  const userInfo = GetUserInfo();
  const logoutText = I18n.t('logout');

  const dispatch = useDispatch();


  const toggleTheme = val => {
    dispatch(setTheme(val));
  };



  return (
    <CustomView style={styles.container}>
      <Header title="My Profile" />
 

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.infoBox}>
          {userInfo?.profileImg ? (
            <Image
              source={{uri: userInfo.profileImg}}
              style={{
                width: 85,
                height: 85,
                borderRadius: 100,
                marginBottom: 5,
              }}
              resizeMethod="scale"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../assets/images/no_image.png')}
              style={{
                width: 85,
                height: 85,
                borderRadius: 100,
                marginBottom: 5,
              }}
              resizeMethod="scale"
              resizeMode="contain"
            />
          )}

        </View>
        <View style={styles.infoContainer}>
          <View style={styles.cell}>
            <Text style={styles.info}>Title </Text>
            <Text style={styles.userInfo}>{userInfo.title} </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.cell}>
            <Text style={styles.info}>Name </Text>
            <Text style={styles.userInfo}>{userInfo.name}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.cell}>
            <Text style={styles.info}>Surname </Text>
            <Text style={styles.userInfo}>{userInfo.surname}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.cell}>
            <Text style={styles.info}>Display Name </Text>
            <Text style={styles.userInfo}>{userInfo.displayName}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.cell}>
            <Text style={styles.info}>Mobile Number </Text>
            <Text style={styles.userInfo}>{userInfo.mobile}</Text>
          </View>
        </View>
      </ScrollView>
     
      <View>
      <Text style={styles.text}>Dark Mode</Text>
          <Switch
        thumbColor={colors.dark_salmon}
        onValueChange={val => toggleTheme(val)}
        value={isDarkMode}
        style={{alignSelf: 'flex-start', marginLeft: 25}}
      /> 
      </View>
      <View style={styles.buttonContainer}>
        <ButtonLogout
          onPress={() => dispatch(userLogout())}
          text={logoutText}
        />
      </View>
     
    
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  cell: {
    flex: 1,
  },

  text: {
    fontSize: fonts.f13,
    letterSpacing: 2,
    color: colors.dim_grey,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },

  scrollView: {
    marginTop: Platform.OS == 'android' ? 10 : 0,
  
    
  },
  info: {
    fontSize: fonts.f13,
    color: colors.dark_salmon,
    textDecorationLine:"underline"
  },
  userInfo: {
    textAlign:"center",
    color:colors.dim_grey
  },
  infoBox: {
    padding: 2,
    alignSelf:"center",
    marginTop:7

},
 
  
  infoContainer: {
    marginVertical:5,
    margin: 10,
    marginBottom:15,
    padding:5,
    width:275,
    borderColor: colors.dark_sea_green,
    borderBottomWidth:1,

    
    
  },
});
