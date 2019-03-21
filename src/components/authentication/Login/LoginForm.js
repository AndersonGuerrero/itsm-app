import React, { Component } from 'react';
import {
    View, TextInput,
    TouchableOpacity,
    Text, Picker
} from 'react-native';
import styles from './styles';
// import Icon from 'react-native-vector-icons/Ionicons';


class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            language: 1
        }
      }

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
                
                <Picker
                    selectedValue={this.state.language}
                    style = {styles.select}  
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                    <Picker.Item label="Sistema" value="1" />
                    <Picker.Item label="Active Directory" value="0" />
                </Picker>

                <TouchableOpacity style={styles.buttonContainer} 
                                    onPress={this.onButtonPress}>
                            <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
      )
  }
}

export default LoginForm