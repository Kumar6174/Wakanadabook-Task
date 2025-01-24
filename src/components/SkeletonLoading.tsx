import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const SkeletonLoadingScreen = () => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shimmerLoop = Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    );

    shimmerLoop.start();

    return () => shimmerLoop.stop();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, Dimensions.get('window').width + 200],
  });

  return (
    <View style={styles.container}>
      {/* Top Tile */}
      <View style={styles.tile}>
        <Animated.View
          style={[
            styles.shimmer,
            { transform: [{ translateX }] },
          ]}
        />
      </View>

      {/* Skeleton Rows */}
      <View style={styles.rowsContainer}>
        {/* Skeleton Column 1 */}
        <View style={styles.column}>
          <View style={styles.square}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX }] },
              ]}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textLine}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmall}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmaller}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Skeleton Column 2 */}
        <View style={styles.column}>
          <View style={styles.square}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX }] },
              ]}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textLine}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmall}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmaller}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
      {/* Skeleton Rows */}
      <View style={[styles.rowsContainer,{marginTop:20}]}>
        {/* Skeleton Column 1 */}
        <View style={styles.column}>
          <View style={styles.square}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX }] },
              ]}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textLine}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmall}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmaller}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Skeleton Column 2 */}
        <View style={styles.column}>
          <View style={styles.square}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX }] },
              ]}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textLine}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmall}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
            <View style={styles.textLineSmaller}>
              <Animated.View
                style={[
                  styles.shimmer,
                  { transform: [{ translateX }] },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  tile: {
    width: '100%',
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  rowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    // width:'40%'
    marginHorizontal: 4,
  },
  square: {
    width: '100%',
    height: 150,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
  },
  textContainer: {
    marginTop: 10,
  },
  textLine: {
    backgroundColor: '#e0e0e0',
    width: '80%',
    height: 10,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  textLineSmall: {
    backgroundColor: '#e0e0e0',
    width: '60%',
    height: 8,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  textLineSmaller: {
    backgroundColor: '#e0e0e0',
    width: '40%',
    height: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
  shimmer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.6)',
    opacity: 0.5,
  },
});

export default SkeletonLoadingScreen;
