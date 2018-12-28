import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';

export default class Form extends React.Component {
    render() {
      return (
        <View style={styles.container}>

          <Text style="color:white;">Username</Text>
            <TextInput
            style={{ height: 50, width: 270, borderColor: 'white', borderWidth: 1,  marginBottom: 20 }}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Enter Your Username"
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
            />
            <Text>Password</Text>
            <TextInput 
            style={{ height: 50, width: 270, borderColor: 'white', borderWidth: 1,  marginBottom: 20 }}
            placeholder="Enter Your password"
            underlineColorAndroid="transparent"
            />
            <Button
            onPress={this.props.onLoginPress}
            title="Sign in"
            color="#841584"
            // accessibilityLabel="Learn more about this purple button"
            />
          
        </View>
        
        
        
      );
      
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
      
    },
    inputBox:{
      width:250,
      borderColor:'gray',

    }
  });