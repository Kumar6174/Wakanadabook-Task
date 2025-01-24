import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BannerCard = ({ title, subtitle, backgroundColor }: any) => {
  return (
    <View style={[styles.banner, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 18,
    padding: 16,
    borderRadius: 18,
  },
  title: {
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default BannerCard;
