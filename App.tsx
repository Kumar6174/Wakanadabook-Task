import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';

// Define the stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false, // Disable header for a custom UI
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* Add more screens here if required */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
