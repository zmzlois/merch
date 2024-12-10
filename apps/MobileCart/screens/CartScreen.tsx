import React from 'react';
import {
  Image,
  ImageRequireSource,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const pics = (i: number) => {
  return `https://picsum.photos/200/300?random=${i}`;
};

const data = Array(3)
  .fill('')
  .map((_, i) => ({title: `Picture ${i}`, source: pics(i)}));

const Row = ({title, source}: {title: string; source: ImageRequireSource}) => (
  <View style={styles.row}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        The quick brown fox jumps over the lazy dog
      </Text>
    </View>
    <Image source={source} style={styles.image} />
  </View>
);

const CartScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map(({title, source}, i) => (
        <React.Fragment key={title}>
          <Row title={title} source={i} />
          <Image source={{uri: source}} style={styles.image} />
          <View style={styles.separator} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    paddingRight: 20,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '200',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(127, 103, 190, 1)',
  },
});

export default CartScreen;
