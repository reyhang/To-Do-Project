import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import CustomView from '../components/CustomView';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../constants';
import {PlusIcon} from '../components/TabBarIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';


export default function TaskScreen() {
  const [todo, setTodo] = useState([]);
  const [textInput, setTextInput] = useState('');
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const addTodo = () => {
    if (textInput === '') {
      Alert.alert('Please do not leave the task blank.');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodo([...todo, newTodo]);
    }

    setTextInput('');
  };

    const saveToDoUserDevice = async payload => {
    try {
      const response = JSON.stringify(payload);
      await AsyncStorage.setItem("storageKey", response);
    } catch (error) {
      return console.log('setItem error', error);
    }
  };

  const getToDoFromUserDevice = async () => {
    try {
      const response = await AsyncStorage.getItem("storageKey");
      console.log('getItem', response);

      if (response) {
        const parseJSON = JSON.parse(response);

        setTodo(parseJSON);
      }
    } catch (error) {
      return console.log('getItem error', error);
    }
  };



  const markToDoComplete = todoId => {
    const newTodoItem = todo.map(item => {
      if (item.id === todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodo(newTodoItem);
  };

  const deleteToDoFromDevice = todoId => {
    const newTodoItem = todo.filter(item => item.id !== todoId);
    setTodo(newTodoItem);
  };

  const ListItem = ({data}) => {
    return (
      <View style={isDarkMode === false ? styles.listitem : styles.listitem}>
        <View style={{flex:20,flexDirection:"row"}} >
          <Text
            style={{
              margin:10,
              fontWeight:"normal",
              fontSize: fonts.f15,
              color: isDarkMode ? colors.white : colors.black,
              textDecorationLine: data?.completed ? "line-through" : "none",

            }}>
            {data?.task}
          </Text>

        </View>
        

        {!data?.completed && (
          <TouchableOpacity onPress={() => markToDoComplete(data.id)} >
       
        <View style={[styles.actionIcon,{backgroundColor:colors.dark_sea_green}]}>
          <Icon
            name="md-checkmark-outline"
            size={20}
            color={colors.white}
          />
        </View>
        </TouchableOpacity> )}

        <TouchableOpacity onPress={() => deleteToDoFromDevice(data.id)} >
        <View style={[styles.actionIcon,{backgroundColor:colors.dark_salmon}]}>
          <Icon
            name="md-close-outline"
            size={20}
            color={colors.white}
            
          />
        </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
  
      getToDoFromUserDevice();
 
  }, []);

  useEffect(() => {
 
      saveToDoUserDevice(todo);
   
  }, [todo]);

  return (
    <CustomView style={styles.container}>
          <Header title="My Tasks"/>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={todo}
        renderItem={({item}) => <ListItem data={item} />}
      />
       

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add task please."
            onChangeText={setTextInput}
            placeholderTextColor={colors.dark_salmon}
            value={textInput}
            style={[styles.input,{backgroundColor:isDarkMode? colors.black:colors.white}]}
          />
        </View>

        <View style={styles.iconContainer}>
          <PlusIcon
            color={colors.dark_salmon}
            name={'md-add'}
            onPress={addTodo}
          />
        </View>
      </View>
    </CustomView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listitem: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    color: colors.dark_salmon,
    borderWidth: 2,
    borderColor: colors.gainsboro,
    padding: 10,
    borderRadius: 7,
    margin: 7,

  },
  inputContainer: {
    height: 60,
    paddingHorizontal: 4,
    elevation: 10,
    flex: 1,
    marginVertical: 10,
    marginRight: 10,
  },
  actionIcon: {
    
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginLeft:5  
    
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.gainsboro,
  },
  footer: {
    position: 'absolute',
    bottom: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
});
