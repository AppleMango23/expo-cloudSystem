import React from 'react';
import { StyleSheet, Text, View,StatusBar,Navigator} from 'react-native';


import Login from './src/pages/Login';
// import Form from './src/pages/Form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <StatusBar  barStyle = "light-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Text>hi</Text>

      <Login/>
      

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


