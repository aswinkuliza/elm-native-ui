/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const Elm = require('./elm');
const component = Elm.Main.start();

AppRegistry.registerComponent(appName, () => component);
