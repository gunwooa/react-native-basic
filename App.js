import React, {useState} from 'react';
import {Button, View, StyleSheet, ScrollView, Text} from 'react-native';

import Input from './src/Input';
import NumList from './src/NumList';

const App = () => {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd']);

  const onChangeInput = event => {
    setMyTextInput(event);
  };

  const onAddTextInput = () => {
    setMyTextInput('');
    setAlphabet(prevState => [...prevState, myTextInput]);
  };

  const onResetTextInput = () => {
    setAlphabet([]);
  };

  const onDeleteTextInput = deleteIndex => {
    setAlphabet(prevState => {
      return prevState.filter((item, index) => deleteIndex !== index);
    });
  };

  return (
    <View style={styles.mainView}>
      <Input value={myTextInput} onChangeText={onChangeInput} />
      <View style={styles.buttonView}>
        <Button title="Add Text Input" onPress={onAddTextInput} />
        <Button title="Reset Text Input" onPress={onResetTextInput} />
      </View>
      <ScrollView style={styles.scrollView}>
        <NumList num={alphabet} delete_={onDeleteTextInput} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  scrollView: {
    width: '100%',
  },
  mainText: {
    margin: 20,
    padding: 20,
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    backgroundColor: 'pink',
  },
});

export default App;
