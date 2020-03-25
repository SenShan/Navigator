/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

import HomeScreen from './src/screens/HomeScreen';
import MeScreen from './src/screens/MeScreen';
import OfferScreen from './src/screens/OfferScreen';
import CustomerScreen from './src/screens/CustomerScreen';

const components = [HomeScreen, MeScreen, OfferScreen, CustomerScreen];
registerScreens('app', components);
Navigation.startTabBasedApp({
  tabs: [
    {
      label: '首页',
      screen: 'app.HomeScreen', // this is a registered name for a screen
      icon: require('./image/home_gray.png'),
      selectedIcon: require('./image/home.png'), // iOS only
      title: '首页',
    },
    {
      label: '客户管理',
      screen: 'app.OfferScreen', // this is a registered name for a screen
      icon: require('./image/manager_gray.png'),
      selectedIcon: require('./image/manager.png'), // iOS only
      title: '客户管理',
    },
    {
      label: '车险报价',
      screen: 'app.CustomerScreen', // this is a registered name for a screen
      icon: require('./image/car_gray.png'),
      selectedIcon: require('./image/car.png'), // iOS only
      title: '车险报价',
    },
    {
      label: '我的',
      screen: 'app.MeScreen',
      icon: require('./image/mine_gray.png'),
      selectedIcon: require('./image/mine.png'), // iOS only
      title: '我的',
    },
  ],
});
