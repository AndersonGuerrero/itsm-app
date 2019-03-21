import { StyleSheet } from 'react-native';
import { general } from './../../../styles';

const styles = StyleSheet.create({
    ...general,
    modulesContainer:{
        alignItems:'center',
        justifyContent: 'center',
        // flexDirection: 'row',
        flex:1,
    },
    modulesText:{
        // justifyContent: 'flex-start',
        margin:10,
        marginTop:30,
        fontSize:30,
    }
});

export default styles;