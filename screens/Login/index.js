import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import Input from '../../components/Input'
import Button from '../../components/Button'

// You can import from local files

export default class App extends Component {
  static navigationOptions = {
    header: null
  }

  onPressLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Dashboard');
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image style={styles.logo} source={require("../../assets/smart.png")} resizeMode='contain' />
        <Text style={styles.header}>Smart Home</Text>
        <Input placeholder={'Email'} />
        <Input placeholder={'Password'} />
        <Button onPress={this.onPressLogin} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  header: {
    fontSize: 50,
    color: 'white',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FA754C',
    padding: 20,
  },
});
