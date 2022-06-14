import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationBar from "./src/components/NavigationBar"

import Home from "./src/screens/Home"
import Setup from "./src/screens/Setup"
import Menu from "./src/screens/Menu"
import Product from "./src/screens/Product"

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1f2937',
    accent: '#f1c40f',
  },
};

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          mode="modal"
          screenOptions={{
            header: (props) => <NavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home" options={{ title: 'Oversigt' }}>
            {(props) => <Home {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Setup" options={{ title: 'Opsætning' }}>
            {(props) => <Setup {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Menu" options={{ title: 'Menu' }}>
            {(props) => <Menu {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Product" options={{ title: 'Produkt' }}>
            {(props) => <Product {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}