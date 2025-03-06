import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function EduPrep() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://edu-prep.vercel.app/test/junior-college/cet' }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});