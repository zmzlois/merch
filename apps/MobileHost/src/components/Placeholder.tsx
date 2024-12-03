import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

type Props = {
  label?: string;
};

const Placeholder: FC<Props> = ({label}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      {label ? <Text style={[styles.text]}>{label}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
  },
});

export default Placeholder;
