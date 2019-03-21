import React, { Component } from 'react';
import {
    View, StyleSheet,
    Image, TouchableOpacity,
    Text, Keyboard
} from 'react-native';
import LoginForm from './LoginForm'
import styles from './styles'


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false
    }
  }

  onClickListenerLogin = (url)=>{
    this.props.navigation.navigate(url)
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      ()=>this.setState({hidden: true}),
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      ()=>this.setState({hidden: false}),
    );
  }


 render() {
    const {navigate} = this.props.navigation;
    const {hidden} = this.state;
		return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logoLogin} source={require('./../../../../assets/images/default-organization.png')} />
            </View>
          <View style={styles.formContainer}>
              <LoginForm/>
            </View>
          {!hidden &&
            <TouchableOpacity onPress={()=>navigate('ChangeIP')}>
                  <Text style={styles.textChangeIP}>Cambia o actuliza la direccion del server</Text>
            </TouchableOpacity> 
          }
        </View>
		);
  }
}

export default Login;