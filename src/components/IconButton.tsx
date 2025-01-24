import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconButton = ({ name, badgeCount }: any) => {
  return (
    <View style={styles.iconButton}>
      <Icon name={name} size={24} color="grey" />
      {badgeCount ? (
        <Text style={styles.badge}>{badgeCount}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 12,
    backgroundColor: '#E8E8E8',
    borderRadius: 40,
    marginHorizontal: 5,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: 5,
    backgroundColor: 'red',
    color: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 5,
    borderRadius: 30,
    fontSize: 12,
  },
});

export default IconButton;
