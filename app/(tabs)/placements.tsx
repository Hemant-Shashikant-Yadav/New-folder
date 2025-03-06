import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const PLACEMENT_IMAGES = [
  {
    id: 1,
    source: require('../../assets/images/placements/1.jpg'),
  },
  // {
  //   id: 2,
  //   source: require('../../assets/images/placements/2.jpg'),
  // },
  {
    id: 3,
    source: require('../../assets/images/placements/3.jpg'),
  },
  {
    id: 4,
    source: require('../../assets/images/placements/4.jpg'),
  },
  {
    id: 5,
    source: require('../../assets/images/placements/5.jpg'),
  },
  {
    id: 6,
    source: require('../../assets/images/placements/6.jpg'),
  },
  {
    id: 7,
    source: require('../../assets/images/placements/7.jpg'),
  },
  {
    id: 8,
    source: require('../../assets/images/placements/8.jpg'),
  },
  {
    id: 9,
    source: require('../../assets/images/placements/9.jpg'),
  },
  {
    id: 10,
    source: require('../../assets/images/placements/10.jpg'),
  },
  {
    id: 11,
    source: require('../../assets/images/placements/11.jpg'),
  },
  {
    id: 12,
    source: require('../../assets/images/placements/12.jpg'),
  },
  {
    id: 13,
    source: require('../../assets/images/placements/13.jpg'),
  },
  {
    id: 14,
    source: require('../../assets/images/placements/14.jpg'),
  },
  {
    id: 15,
    source: require('../../assets/images/placements/15.jpg'),
  },
  {
    id: 16,
    source: require('../../assets/images/placements/16.jpg'),
  },
  {
    id: 17,
    source: require('../../assets/images/placements/17.jpg'),
  },
  {
    id: 18,
    source: require('../../assets/images/placements/18.jpg'),
  },
  {
    id: 19,
    source: require('../../assets/images/placements/19.jpg'),
  },
];
export default function Placements() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Our Placements</Text>
        <Text style={styles.subheading}>
          Empowering careers through excellence in education and industry partnerships
        </Text>
        
        <View style={styles.imageGrid}>
          {PLACEMENT_IMAGES.map((image) => (
            <View key={image.id} style={styles.imageContainer}>
              <Image
                source={image.source}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Inter_400Regular',
  },
  imageGrid: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    aspectRatio: 1/1,
    height: undefined,
  },
  imageTitle: {
    padding: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Inter_600SemiBold',
  },
});