import React, { Component } from 'react';
import {
    View, StyleSheet,
    Image, TouchableOpacity,
    Text, Keyboard
} from 'react-native';
import ChangeIPForm from './ChangeIPForm'
import styles from './../Login/styles'


class ChangeIP extends Component {

 render() {
    const {navigate} = this.props.navigation;
		return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logoLogin} source={require('./../../../../assets/images/default-organization.png')} />
            </View>
          <View style={styles.formContainer}>
              <ChangeIPForm onChangeIp={()=>navigate('Login')}/>
            </View>
        </View>
		);
  }
}

export default ChangeIP;