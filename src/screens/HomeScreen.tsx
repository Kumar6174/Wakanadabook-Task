import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../redux/actions/productsActions';
import { RootState } from '../redux/store';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import BannerCard from '../components/BannerCard';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonLoadingScreen from '../components/SkeletonLoading';

const sortOptions = [
  { title: 'Asce', value: 'asc' },
  { title: 'Desc', value: 'desc' },
  { title: 'A - Z', value: 'az' },
  { title: 'Z - A', value: 'za' },
  { title: 'High - Low', value: 'highLow' },
  { title: 'Low - High', value: 'lowHigh' },
];

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products to load per page
  const [displayedProducts, setDisplayedProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState<string>('asc'); // Current sorting option

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    filterAndSortProducts();
  }, [searchQuery, products, currentPage, currentSort]);

  // Filter and sort products based on search query and sorting option
  const filterAndSortProducts = () => {
    let filteredProducts = products;

    // Filter by search query
    if (searchQuery.trim() !== '') {
      filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Apply sorting
    switch (currentSort) {
      case 'asc':
        filteredProducts.sort((a, b) => a.id - b.id); // Ascending by ID
        break;
      case 'desc':
        filteredProducts.sort((a, b) => b.id - a.id); // Descending by ID
        break;
      case 'az':
        filteredProducts.sort((a, b) =>
          a.title.localeCompare(b.title), // Alphabetical (A-Z)
        );
        break;
      case 'za':
        filteredProducts.sort((a, b) =>
          b.title.localeCompare(a.title), // Reverse Alphabetical (Z-A)
        );
        break;
      case 'highLow':
        filteredProducts.sort((a, b) => b.price - a.price); // High to Low Price
        break;
      case 'lowHigh':
        filteredProducts.sort((a, b) => a.price - b.price); // Low to High Price
        break;
      default:
        break;
    }

    // Apply pagination for filtered and sorted products
    const paginatedProducts = filteredProducts.slice(
      0,
      productsPerPage * currentPage,
    );
    setDisplayedProducts(paginatedProducts);
  };

  const loadMoreProducts = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // if (loading && displayedProducts.length === 0) {
  //   return (
      
      // <ActivityIndicator style={styles.loader} size="large" color="#000" />
  //   );
  // }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  return (
    <ScrollView nestedScrollEnabled style={styles.scrollContainer}>
      <StatusBar backgroundColor={'#fff'} />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BannerCard
        title="A Summer Surprise"
        subtitle="Cashback 20%"
        backgroundColor="rgba(69,53,145,1)"
      />

{loading && displayedProducts.length === 0 ?
  <SkeletonLoadingScreen></SkeletonLoadingScreen>
  :
  <>
      <View style={styles.filterContainer}>
        <View style={styles.filterIconContainer}>
          <Icon name={'filter'} size={24} color="grey" />
        </View>

        <FlatList
          data={sortOptions}
          horizontal
          keyExtractor={(item) => item.value}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.sortOption,
                currentSort === item.value && styles.activeSortOption,
              ]}
              onPress={() => setCurrentSort(item.value)}
            >
              <Text
                style={[
                  styles.sortOptionText,
                  currentSort === item.value && styles.activeSortOptionText,
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Products</Text>
        <Text style={styles.sectionAction}>See more</Text>
      </View>

      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        contentContainerStyle={styles.grid}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreProducts}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          return (
            <>
              {loading && <ActivityIndicator size="small" color="#000" />}
              {productsPerPage * currentPage < products.length && (
                <TouchableOpacity onPress={() => loadMoreProducts()}>
                  <Text style={styles.loadMoreText}>Tap To Load More</Text>
                </TouchableOpacity>
              )}
            </>
          );
        }}
      />
  </>

    }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    flex: 1,
    textAlign: 'center',
    color: 'red',
  },
  scrollContainer: {
    backgroundColor: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 18,
  },
  filterIconContainer: {
    padding: 12,
    backgroundColor: '#E8E8E8',
    borderRadius: 40,
    marginRight:5
  },
  sortOption: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'grey',
    justifyContent: 'center',
    height: 30,
    marginHorizontal: 5,
  },
  activeSortOption: {
    borderColor: 'blue',
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
  },
  sortOptionText: {
    color: 'grey',
  },
  activeSortOptionText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  sectionHeader: {
    marginHorizontal: 18,
    marginTop: 14,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  sectionTitle: {
    color: 'rgba(51,51,51,1)',
    fontWeight: '800',
    fontSize: 16,
  },
  sectionAction: {
    color: '#B8B8B8',
    fontWeight: '600',
  },
  grid: {
    padding: 10,
  },
  loadMoreText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'blue',
    fontWeight: '600',
  },
});

export default HomeScreen;
