import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from './pages/mainPage/MainPage';
import ContactPage from './pages/contact/Contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="MainPage" component={MainPage}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Contact" component={ContactPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


