import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { lightColors } from '../theme/colors';

interface HeaderProps {
  onChangeTheme(): void;
  colors: typeof lightColors;
}

export function Header({ onChangeTheme, colors }: HeaderProps) {
  return (
    <View style={[styles.header, { backgroundColor: colors.primary }]}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
          do
        </Text>
      </View>
      <TouchableOpacity style={styles.headerButton} onPress={onChangeTheme}>
        <Text style={{ color: colors.secondary }}>Mudar tema</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerButton: {
    padding: 20,
  },
});
