import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onTimingChange }) => {
  return (
    <>
      <View style={styles.timingContainer}>
        <RoundedButton size={75} title="1" onPress={() => onTimingChange(1)} />
      </View>
      <View style={styles.timingContainer}>
        <RoundedButton size={75} title="5" onPress={() => onTimingChange(5)} />
      </View>
      <View style={styles.timingContainer}>
        <RoundedButton
          size={75}
          title="10"
          onPress={() => onTimingChange(10)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
