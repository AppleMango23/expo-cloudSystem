import React,{Component} from 'react';
import { StyleSheet, View} from 'react-native';


import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component{
    render(){

        return(
            <View style={styles.container}>
            <Logo/>
            <Form/>
            
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });