import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen';

export type MainStackParamList = {
  Cart: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitle: 'MiniApp',
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'rgba(255,255,255,1)',
      }}>
      <Main.Screen name="Cart" component={CartScreen} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(79, 55, 139, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
