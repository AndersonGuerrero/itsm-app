import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Home from './../Home';
// import Friends from './../Friends';

const StackNavigator = createStackNavigator({
  // Home: { screen: Home },
  // Friends: { screen: Friends},
}
);

export default createAppContainer(StackNavigator);