import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ErrorBoundary from '../components/ErrorBoundary';
// @ts-expect-error DTS disabled
const CartNavigator = React.lazy(() => import('MobileCart/CartNavigator'));

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const CartScreen = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <CartNavigator />
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartScreen;
