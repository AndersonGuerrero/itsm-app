import { StyleSheet } from 'react-native';
import { general, buttons } from './../../../styles';

const styles = StyleSheet.create({
    ...general,
    ...buttons,
    loginContainer:{
        alignItems: 'center',
        // flexGrow: 4,
        justifyContent: 'center',
        height: '40%'
    },
    logoLogin: {
        // position: 'absolute',
        width: 300,
        height: 100
    },
    textChangeIP: {
      marginTop: 9,
      color: '#000',
      textAlign:'center'
    }
});

export default styles;