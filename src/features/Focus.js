import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
          underlineColor={colors.secondaryLightest}
          theme={{ colors: { primary:  colors.secondaryLightest }}}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    paddingTop: spacing.lg,
    flexDirection: 'row',
  },
});
