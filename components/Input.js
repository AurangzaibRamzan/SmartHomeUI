import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';

const Input = ({
  placeholder = "",
  placeholderTextColor = 'white',
  imgUrl,
}) => <View style={styles.textInput}>
    <TextInput
      style={{
        fontSize: 25,
        height: 50,
        flex: 1,
        color: 'grey'
      }}
      autoCorrect={false}
      spellCheck={false}
      underlineColorAndroid='transparent'
      placeholder={placeholder}
      placeholderTextColor='grey'
    />
  </View>

export default Input

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  textInput: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    paddingLeft: 15,
    // paddingRigth: 15,
    marginBottom: 10,
    backgroundColor: 'white',
  }
});