import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { lightColors } from '../theme/colors';

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
          do
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightColors.primary,
  },
  header: {
    paddingBottom: 44,
    backgroundColor: lightColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});
