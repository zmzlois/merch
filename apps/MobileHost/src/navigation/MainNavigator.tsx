import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

export type MainStackParamList = {
  Home: undefined;
  Cart: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'HostApp',
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'rgba(255,255,255,1)',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(56, 30, 114, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});
