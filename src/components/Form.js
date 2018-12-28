import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';


export default class Form extends React.Component {

    


    render() {
      return (
        <View style={styles.container}>

          <Text style="color:white;">Username</Text>
            <TextInput
            style={styles.textInputStyle}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Enter Your Username"
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
            />
            <Text>Password</Text>
            <TextInput secureTextEntry={true}
            style={styles.textInputStyle}
            placeholder="Enter Your password"
            underlineColorAndroid="transparent"
            />
            {/* <Button
            onPress={this.props.onLoginPress}
            title="Sign in"
            color="#841584"
            // accessibilityLabel="Learn more about this purple button"
            /> */}

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
          
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

    },
    button:{
      width:230,
      backgroundColor:'black',
      borderRadius:25,
      marginVertical:10,
      paddingVertical:12

    },
    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
      
    },

    textInputStyle:{
      height: 50,
      width: 270, 
      borderColor: 'white', 
      borderWidth: 1,  
      marginBottom: 20, 
      borderRadius:20,
      backgroundColor:'white' ,
      // placeholderTextColor:'white',
      textAlign:"center",
      
    }
  });