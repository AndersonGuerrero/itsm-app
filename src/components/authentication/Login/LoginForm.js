import React, { Component } from 'react';
import {
    View, TextInput,
    TouchableOpacity,
    StyleSheet, Text
} from 'react-native';
import styles from './styles';
// import Icon from 'react-native-vector-icons/Ionicons';


class LoginForm extends Component {

    onButtonPress = ()=>{
    this.props.navigation.navigate(url)
  }
  render(){
      return(
            <View style={styles.formContainer}>
                <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                returnKeyType="next" 
                placeholder='Usuario' 
                placeholderTextColor='#d3d3d3'/>

                <TextInput style = {styles.input}   
                              returnKeyType="go" 
                              ref={(input)=> this.passwordInput = input} 
                              placeholder='Password' 
                              placeholderTextColor='#d3d3d3' 
                              secureTextEntry/>

                <TouchableOpacity style={styles.buttonContainer} 
                                    onPress={this.onButtonPress}>
                            <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
      )
  }
}

export default LoginForm