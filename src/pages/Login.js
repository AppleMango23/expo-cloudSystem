import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';

export default class Login extends Component{
    render(){

        return(
            <View style={styles.container}>

            <Text>Username</Text>
            <TextInput
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Enter Your Username"
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
            />
            <Text>Password</Text>
            <TextInput 
            style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  marginBottom: 20 }}
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
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });