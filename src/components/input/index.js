import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Pressable} from 'react-native';

const Input = ({
  widthInput = 200,
  heightInput = 60,
  title = 'No PlaceHolder',
  text,
  onChangeText,

  maxLength = 17,
}) => {
  const styles = StyleSheet.create({
    input: {
      width: widthInput,
      paddingLeft: 15,
      height: heightInput,
      fontSize: 20,
      marginBottom: 10,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  });

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={title}
        placeholderTextColor={placeholderTextColor}
      />
    </>
  );
};

export default Input;
