import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const REVIEWS = {
  parents: [
    'ZSFEZGdVHAI', // Replace with actual YouTube video IDs
    'NBFW1qFKc1A', // Replace with actual YouTube video IDs
    'fD1lcOp2lpM', // Replace with actual YouTube video IDs
    'XFYGTKA0ZQ0', // Replace with actual YouTube video IDs
    'WflmHiV58KA', // Replace with actual YouTube video IDs
    'xPdV76cL7-I', // Replace with actual YouTube video IDs
    '4be27bBe5lQ', // Replace with actual YouTube video IDs
  ],
  alumni: [
    '92k5VVOM7r4', // Replace with actual YouTube video IDs

    'rG7Ji4OkBfE', // Replace with actual YouTube video IDs
    'iRqCrLBiO3U',
    'aXZSvRyKlbQ',
    'NRi4lxD4Ix4',
    'hzdKhggQ0hY',
    'BxMZfv7PKZk',
    'W_LEGpLktew',
    'PvbSAQNi8F4',
    '7zLpU7dJYos',
  ],
  faculty: [
    'Uas8Os85B-A',
    'SmRW7aClbds',
    'w66mrzFPntw',
    '_1uWRlbqmT4',
    'Z8NjVTrRYeI',
  ],
};

export default function Reviews() {
  const [activeTab, setActiveTab] = useState<'parents' | 'alumni' | 'faculty'>('parents');

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'parents' && styles.activeTab]}
        onPress={() => setActiveTab('parents')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'parents' && styles.activeTabText,
          ]}
        >
          Student Reviews
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'alumni' && styles.activeTab]}
        onPress={() => setActiveTab('alumni')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'alumni' && styles.activeTabText,
          ]}
        >
          Alumni Reviews
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'faculty' && styles.activeTab]}
        onPress={() => setActiveTab('faculty')}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === 'faculty' && styles.activeTabText,
          ]}
        >
          Faculty Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderTabs()}
      <View style={styles.section}>
        {REVIEWS[activeTab].map((videoId, index) => (
          <View key={index} style={styles.videoContainer}>
            <YoutubePlayer height={220} videoId={videoId} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a237e',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter_700Bold',
  },
  activeTabText: {
    color: '#1a237e',
  },
  section: {
    marginBottom: 30,
    padding: 15,
  },
  videoContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
