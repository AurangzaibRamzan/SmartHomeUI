import React, { Component } from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
  View,
  Text,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window')
const Button = ({
  placeholder = "",
  placeholderTextColor = 'white',
  imgUrl,
  onPress,
}) => {
  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (<Touchable onPress={onPress}>
    <View style={styles.btnView}>
      <Text style={{
        color: 'white',
        fontSize: 20,
      }}>Login</Text>
    </View>
  </Touchable>)
}

export default Button

const styles = StyleSheet.create({
  btnView: {
    marginTop: 25,
    height: 55,
    width: 180,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'grey',
  }
});