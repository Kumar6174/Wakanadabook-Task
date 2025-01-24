import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import IconButton from './IconButton';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({searchQuery, setSearchQuery}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="grey" style={styles.icon} />
        <TextInput
          placeholder="Search product"
          style={styles.textInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} 
        />
      </View>
      <IconButton name="cart-outline" />
      <IconButton name="notifications-outline" badgeCount={3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingRight:12
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    flex: 1,
    borderRadius: 12,
    height: 48,
    marginRight: 5,
    paddingRight: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    height: 48,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Header;
