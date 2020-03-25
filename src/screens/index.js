import {Navigation} from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import MeScreen from './MeScreen';
import OfferScreen from './OfferScreen';
import CustomerScreen from './CustomerScreen';
export function registerScreens(tag, components) {
  components.map((item, index) => {
    Navigation.registerComponent(tag + ' . ' + item.name, () => item);
  });
  // Navigation.registerComponent('app.HomeScreen', () => HomeScreen);
  // Navigation.registerComponent('app.MeScreen', () => MeScreen);
  // Navigation.registerComponent('app.OfferScreen', () => OfferScreen);
  // Navigation.registerComponent('app.CustomerScreen', () => CustomerScreen);
}
