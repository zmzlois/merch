import React from 'react';
import {Text} from 'react-native';
import ErrorBoundary from '../components/ErrorBoundary';
import {CheckoutSuccessNavigationProps} from '../navigation/types';

const CheckoutSuccessScreen = React.lazy(
  () => import('MobileCheckout/CheckoutSuccessScreen'),
);

type Props = CheckoutSuccessNavigationProps;

const LazyLoadedCheckoutSuccessScreen = ({navigation}: Props) => {
  const handleDismiss = () => {
    navigation.popToTop();
    navigation.jumpTo('Home');
  };

  return (
    <ErrorBoundary name="CheckoutSuccessScreen">
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <CheckoutSuccessScreen onDismiss={handleDismiss} />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default LazyLoadedCheckoutSuccessScreen;
