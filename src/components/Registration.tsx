import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import {TextInput, } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
  margin-right: 55%;
  padding: 10px;
`;

const Label = styled.Text`
  margin-right: 55%;
  padding: 5px;
  color: black;
`;

const Registration = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
    >
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container1}>
      <View style={styles.form}>
        <View style={styles.formElevated}>
          <Title>Registration</Title>
          <Label>Name :</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            style={styles.textInput}
          />
          <Label>Phone No :</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Label>Password</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Label>Address :</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            style={styles.textInput}
          />
          <TouchableOpacity>
            <Button
              title="Registration"
              color="#6d179e"
            />
          </TouchableOpacity>
        </View>
      </View>
      </View> 
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
      },
      container1:{
        height:'70%',
        backgroundColor: '#700938',
      },
  form: {
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'70%',
    
  },
  textInput: {
    width: '75%',
    height: 35,
    marginBottom: 10,
  },
  formElevated: {
    backgroundColor: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height:'170%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  

 
 
});
