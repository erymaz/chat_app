/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { UserProvider, ChatProvider } from './src/contexts';
import React from 'react';
import {AppNavigation} from './src/navigation';

const App = () => {
  return (
    <UserProvider>
      <ChatProvider>
        <AppNavigation />
      </ChatProvider>
    </UserProvider>
  );
};

export default App;
