import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './../components/authentication/Login';
import ChangeIP from './../components/authentication/ChangeIP';

const StackNavigator = createStackNavigator({
  Login: { screen: Login },
  ChangeIP: { screen: ChangeIP},
},{
  initialRouteName: 'Login',
  headerMode: 'fade-in-place',
  mode: 'modal',
}
);

export default createAppContainer(StackNavigator);