import { registerRootComponent } from 'expo';

import App from './App';
import { Platform } from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root');
    if (rootTag) {
        rootTag.style.margin = '0';
        rootTag.style.height = '100%';
    }
}