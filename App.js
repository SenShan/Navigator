/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Main from './src/Main';
import Much from './src/Much';
import Mine from './src/Mine';
import Shop from './src/Shop';

const mainTag = 'mainPage';
const muchTag = 'muchPage';
const shopTag = 'shopPage';
const mineTag = 'minePage';

Navigation.registerComponent(mainTag, () => Main);
Navigation.registerComponent(muchTag, () => Much);
Navigation.registerComponent(shopTag, () => Shop);
Navigation.registerComponent(mineTag, () => Mine);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {component: {name: mainTag}},
          {component: {name: muchTag}},
          {component: {name: shopTag}},
          {component: {name: mineTag}},
        ],
      },
    },
  });
});
