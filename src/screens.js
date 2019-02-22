import {Navigation} from 'react-native-navigation';

// register each of the screens 
export function registerScreens() { // We’ll place all of the screens we like to initialize into a single function, 
                                     //& call the function before creating the root of our navigation


  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
  Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  Navigation.registerComponent('Screen2', () => require('./Screen2').default);
}