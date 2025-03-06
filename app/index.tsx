import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { Phone } from 'lucide-react-native';
import MapView, { Marker } from 'react-native-maps';

const COLLEGE_PHONE = '+91-8600600700'; // Replace with actual phone number
const GRID_ITEMS = [
  {
    title: 'Mock Test',
    route: '/eduprep',
    icon: '🎓',
  },
  {
    title: 'About Us',
    route: '/about',
    icon: 'ℹ️',
  },
  {
    title: 'Programs',
    route: '/programs',
    icon: '📚',
  },
  {
    title: 'Placements',
    route: '/placements',
    icon: '💼',
  },
  {
    title: 'Reviews',
    route: '/reviews',
    icon: '⭐',
  },
  {
    title: 'Visit Website',
    route: '/website',
    icon: '🌐',
  },
];

export default function Home() {
  const handleCall = () => {
    Linking.openURL(`tel:${COLLEGE_PHONE}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.adcet.ac.in/uploads/1676968661.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerText}>
          <Text style={styles.instituteName}>Sant Dnyaneshwar Shikshan Sanstha's</Text>
          <Text style={styles.collegeName}>Annasaheb Dange College of Engineering and Technology (ADCET), Ashta</Text>
          <Text style={styles.affiliation}>An Empowered Autonomous Institute, Affiliated to Shivaji University, Kolhapur, Approved By AICTE, New Delhi & Govt. of Maharashtra</Text>
          <Text style={styles.accreditation}>Accredited by NAAC 'A++' Grade, Bangalore</Text>
          <Text style={styles.nba}>Eligible Programs Accredited by NBA, New Delhi</Text>
        </View>
      </View>

      <View style={styles.grid}>
        {GRID_ITEMS.map((item, index) => (
          <Link href={item.route} key={index} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Contact Us</Text>
        <Text style={styles.address}>
          A/P: Ashta, Tal: Walwa, Dist: Sangli, Maharashtra, India - 416301
        </Text>
        
        <View style={styles.map}>
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: 16.941714610788097,
              longitude: 74.41702511142599,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 16.941714610788097,
                longitude: 74.41702511142599,
              }}
              title="ADCET"
              description="Annasaheb Dange College of Engineering and Technology"
            />
          </MapView>
        </View>
      </View>

      <TouchableOpacity style={styles.callButton} onPress={handleCall}>
        <Phone color="white" size={24} />
        <Text style={styles.callButtonText}>Call Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  headerText: {
    alignItems: 'center',
  },
  instituteName: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    fontFamily: 'Inter_400Regular',
  },
  collegeName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#1a237e',
    fontFamily: 'Inter_700Bold',
  },
  affiliation: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
    color: '#424242',
    fontFamily: 'Inter_400Regular',
  },
  accreditation: {
    fontSize: 16,
    color: '#2e7d32',
    marginBottom: 2,
    fontFamily: 'Inter_600SemiBold',
  },
  nba: {
    fontSize: 16,
    color: '#2e7d32',
    fontFamily: 'Inter_600SemiBold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#black',
    fontFamily: 'Inter_600SemiBold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    fontFamily: 'Inter_700Bold',
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
    fontFamily: 'Inter_400Regular',
  },
  map: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  mapView: {
    flex: 1,
  },
  callButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#1a237e',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  callButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});