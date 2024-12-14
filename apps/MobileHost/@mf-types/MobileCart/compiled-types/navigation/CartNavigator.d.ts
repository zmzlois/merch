import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export type MainStackParamList = {
    Cart: undefined;
};
export type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;
declare const MainNavigator: () => React.JSX.Element;
export default MainNavigator;
