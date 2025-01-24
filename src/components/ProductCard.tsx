import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductCard = ({product}: any) => {
  const [isWishList, setIsWishList] = useState(false);
  return (
    <View style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {product.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity onPress={() => setIsWishList(!isWishList)}>
          <View
            style={{
              padding: 5,
              backgroundColor: isWishList?'rgba(224,158,155,0.4)':'#F8F8F8',
              borderRadius: 20,
            }}>
            <Icon name="heart" size={16} color={isWishList?'red':'#E8E8E8'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,

    shadowOffset: { height: 5, width: 5 }, // Position of shadow
    shadowColor: 'rgba(0, 0, 0, 0.7)',  // Shadow color
    shadowOpacity: 0.5, // Opacity of shadow
    shadowRadius: 5, // Blur radius of shadow
  
    // Shadow for Android
    elevation: 5, // Elevation for Android shadows
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    // backgroundColor:'grey'
  },
  title: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
    color: '#1f1f1f',
  },
  price: {
    fontWeight: 'bold',
    color: '#ff8214',
  },
});

export default ProductCard;
