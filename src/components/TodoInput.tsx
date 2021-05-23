import React, { useState } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { lightColors } from '../theme/colors';

interface TodoInputProps {
  addTask: (task: string) => void;
  colors: typeof lightColors;
}

export function TodoInput({ addTask, colors }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (task.length) {
      addTask(task);
      setTask('');
    }
  }

  return (
    <View
      style={[
        styles.inputContainer,
        Platform.OS === 'ios'
          ? styles.inputIOSShadow
          : styles.inputAndroidShadow,
        { backgroundColor: colors.inputBackground },
      ]}
    >
      <TextInput
        style={[
          styles.input,
          { backgroundColor: colors.inputBackground, color: colors.secondary },
        ]}
        placeholderTextColor={colors.inputPlaceholder}
        placeholder='Adicionar novo todo...'
        returnKeyType='send'
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID='add-new-task-button'
        activeOpacity={0.7}
        style={[styles.addButton, { backgroundColor: colors.secondary }]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  inputAndroidShadow: {
    elevation: 5,
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
