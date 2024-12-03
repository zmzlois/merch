import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialBottomTabScreenProps } from 'react-native-paper';
import { CartStackParamList } from './CartCheckoutNavigator';
// import { TabsParamList } from './TabsNavigator';


export type TabsParamList = {
    Home: undefined;
    CartNavigator: undefined;
    Account: undefined;
};

export type CheckoutSuccessNavigationProps = CompositeScreenProps<
    NativeStackScreenProps<CartStackParamList, 'CheckoutSuccess'>,
    MaterialBottomTabScreenProps<TabsParamList, 'CartNavigator'>
>;

export type CartNavigationProps = CompositeScreenProps<
    NativeStackScreenProps<CartStackParamList, 'Cart'>,
    MaterialBottomTabScreenProps<TabsParamList, 'CartNavigator'>
>;