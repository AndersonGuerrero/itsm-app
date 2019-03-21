import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles'

class Modules extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={ styles.container }>

            <View  style={ styles.modulesContainer}>
              <TouchableOpacity  onPress={()=>navigate('Login', {module: 'OU'})}>
                <Image style={ styles.imgModules}
                  source={require('./../../../../assets/images/analyst.png')}>
                </Image>
              </TouchableOpacity>
               <Text style={ styles.modulesText}> Analista</Text>
            </View>

            <View  style={ styles.modulesContainer} >
              <TouchableOpacity  onPress={()=>navigate('Login', {module: 'OU'})}>
                <Image style={ styles.imgModules}
                  source={require('./../../../../assets/images/user.png')}>
                </Image>
              </TouchableOpacity>
              <Text style={ styles.modulesText}> Usuarios</Text>
            </View>

        </View>
    )
  }
} 
 export default Modules;