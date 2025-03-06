import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import { Phone } from 'lucide-react-native';
import { usePathname } from 'expo-router';

const COLLEGE_PHONE = '+91234567890'; // Replace with actual phone number
const WEBVIEW_ROUTES = ['/eduprep', '/website'];

export default function CallButton() {
  const pathname = usePathname();
  
  // Don't show button on webview pages
  if (WEBVIEW_ROUTES.includes(pathname)) {
    return null;
  }

  const handleCall = () => {
    Linking.openURL(`tel:${COLLEGE_PHONE}`);
  };

  return (
    <TouchableOpacity style={styles.callButton} onPress={handleCall}>
      <Phone color="white" size={24} />
      <Text style={styles.callButtonText}>Call Now</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    zIndex: 1000,
  },
  callButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
});