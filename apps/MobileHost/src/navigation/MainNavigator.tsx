import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartCheckoutNavigator from './CartCheckoutNavigator';
import Cats from '../components/Cats';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Cats} />
      {/* <Stack.Screen name="Cart" component={CartCheckoutNavigator} /> */}
    </Stack.Navigator>
  );
}
