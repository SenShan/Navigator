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

Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: mainTag,
                  passProps: {
                    text: 'This is tab 1',
                  },
                },
              },
            ],
            options: {
              bottomTab: {
                text: '首页',
                icon: require('./image/home_gray.png'),
                selectedIcon: require('./image/home.png'),
                testID: 'tab_Home',
              },
            },
          },
        },
        {
          component: {
            name: muchTag,
            passProps: {
              text: 'This is tab 2',
            },
            options: {
              bottomTab: {
                text: '更多',
                icon: require('./image/manager_gray.png'),
                selectedIcon: require('./image/manager.png'),
                testID: 'tab_Much',
              },
            },
          },
        },
        {
          component: {
            name: shopTag,
            passProps: {
              text: 'This is tab 3',
            },
            options: {
              bottomTab: {
                text: '购物车',
                icon: require('./image/car_gray.png'),
                selectedIcon: require('./image/car.png'),
                testID: 'tab_Car',
              },
            },
          },
        },
        {
          component: {
            name: mineTag,
            passProps: {
              text: 'This is tab 3',
            },
            options: {
              bottomTab: {
                text: '我的',
                icon: require('./image/mine_gray.png'),
                selectedIcon: require('./image/mine.png'),
                testID: 'tab_Mine',
              },
            },
          },
        },
      ],
    },
  },
});
