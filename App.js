import React from 'react';
import { StyleSheet, Text, View,StatusBar,Navigator} from 'react-native';


import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <StatusBar  barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Text>hi</Text>

      {/* <Login/> */}
      <Signup/>

      </View>
      
      
    );
    
  }
  

  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});


