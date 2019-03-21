import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f1f1b3',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000',
        borderColor: '#9f9f9f',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonContainer:{
        backgroundColor: '#447DF7',
        paddingVertical: 15,
        borderRadius: 5
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    select:{
        height: 50,
        width: '100%',
    }
});