import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>

          <Image style={{width:199, height:185}} source={require('../images/cloud.png')}/>
          <Text style={styles.logoText}>Welcome to My app</Text>

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
    logoText:{
      marginVertical:10,
      fontSize:18,
      color:'white'
    }
  });