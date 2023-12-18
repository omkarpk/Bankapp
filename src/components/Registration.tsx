import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

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

const Logo =styled.Image`
  height:40px;
  width:150px;
  marginLeft:50px;
  marginTop:100px
`;

const LoginText=styled.Text`
color:black;
marginLeft:220px;
text-decoration-line: underline;
`;
const Registration = () => {
  return (
    <>
    <KeyboardAvoidingView
      behavior="padding"
    >  
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container1}>
    <View style={{height:20}}>
      <Logo 
          source={require('../../assests/logo.png')} 
      />
      </View>
      <View style={styles.form}>
        <View style={styles.formElevated}>
          <Title>Registration</Title>
        
          <Label>Name :</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            style={styles.textInput}
            onChangeText={null}
          />
          <Label>Phone No :</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={null}
          />
          <Label>Password</Label>

          <Icon name="person" size={30} color={"blue"}></Icon>
          <TextInput
            mode="outlined"
            outlineColor="black"
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={null}
          />
          <Label>Address :</Label>
          <TextInput
            mode="outlined"
            outlineColor="black"
            style={styles.textInput}
            onChangeText={null}
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
    <TouchableOpacity>
      <View style={{height:20}}>
        <LoginText>Already Registered User</LoginText>
      </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </>
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
