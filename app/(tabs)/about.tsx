import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://www.adcet.ac.in/images/slider/slider-2.jpg' }}
          style={styles.headerImage}
          resizeMode="contain"
        />
        
        <View style={styles.section}>
          <Text style={styles.heading}>About ADCET</Text>
          <Text style={styles.placeholder}>
            The Annasaheb Dange College of Engineering and Technology (ADCET), Ashta is one of the iconoic public institutions of higher technical education in Western Maharashtra, distinguished by its compassion to produce engineers with competence for improving the human condition and building the nation.{"\n\n"}
            Established in 1999, ADCET, Ashta is an Empowered Autonomous institute affiliated to Shivaji University, Kolhapur, Maharashtra and approved by AICTE, New Delhi. The institute is NAAC accredited with "A++" grade, ISO 9001:2015 certified and runs programmes accredited by NBA, New Delhi.{"\n\n"}
            ADCET's campus is spread over 25 acres in the heart of the city of Ashta, Sangli, where 3000 undergraduate students build their lifelong friendships and connections while enjoying their educational journey.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Vision</Text>
          <Text style={styles.placeholder}>
            To be a Leader in producing professionally competent engineers.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Mission</Text>
          <Text style={styles.placeholder}>
            We, Annasaheb Dange College of Engineering & Technology, Ashta, are committed to achieve our vision by:{"\n\n"}
            • Imparting effective outcome based education{"\n"}
            • Preparing students through skill oriented courses to excel in their profession with ethical values{"\n"}
            • Promoting research to benefit the society{"\n"}
            • Strengthening relationship with all the stakeholders
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Salient Features</Text>
          <Text style={styles.placeholder}>
            • An Empowered Autonomous Institute{"\n"}
            • NBA Accredited Programs{"\n"}
            • NAAC 'A++' GRADE Institute{"\n"}
            • Accredited by TCS, Mumbai{"\n"}
            • Modern state-of-art laboratories{"\n"}
            • 500 Mbps leased line internet connectivity{"\n"}
            • Excellent Hostel Facility{"\n"}
            • Well qualified & experienced faculty members
          </Text>
        </View>
      </View>    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 15,
    fontFamily: 'Inter_700Bold',
  },
  placeholder: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    fontFamily: 'Inter_400Regular',
  },
});