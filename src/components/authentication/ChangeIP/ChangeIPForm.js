import React, { Component } from 'react';
import {
    View, TextInput,
    TouchableOpacity, Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './../Login/styles';
// import Icon from 'react-native-vector-icons/Ionicons';


class ChangeIPForm extends Component {
   
    render(){
        const { onChangeIp } = this.props
        return(
            <View style={styles.formContainer}>
                <TextInput style = {styles.input} 
                autoCapitalize="none" 
                returnKeyType="go"  
                autoCorrect={false} 
                returnKeyType="next" 
                placeholder='Direccion del servidor' 
                placeholderTextColor='#d3d3d3'/>

                <TouchableOpacity style={styles.buttonContainer} 
                                    onPress={()=>onChangeIp()}>
                            <Text  style={styles.buttonText}>Cambiar</Text>
                </TouchableOpacity> 
            </View>
        )
  }
}

ChangeIPForm.propTypes = {
    onChangeIp: PropTypes.func.isRequired
};

export default ChangeIPForm