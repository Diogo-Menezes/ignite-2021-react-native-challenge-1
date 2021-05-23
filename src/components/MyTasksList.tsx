import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from 'react-native';
import { lightColors } from '../theme/colors';

function FlatListHeaderComponent({ colors }: { colors: typeof lightColors }) {
  return (
    <View>
      <Text style={[styles.header, { color: colors.secondary }]}>
        Minhas tasks
      </Text>
    </View>
  );
}

interface MyTasksListProps {
  colors: typeof lightColors;
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({
  colors,
  tasks,
  onLongPress,
  onPress,
}: MyTasksListProps) {
  return (
    <FlatList
      contentContainerStyle={{ flex: 1 }}
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done
                ? [
                    styles.taskButtonDone,
                    { backgroundColor: colors.primary10percent },
                  ]
                : styles.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? [styles.taskMarkerDone, { backgroundColor: colors.primary }]
                  : styles.taskMarker
              }
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent colors={colors} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        backgroundColor: colors.background,
        paddingHorizontal: 24,
        paddingTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10,
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  taskTextDone: {
    textDecorationLine: 'line-through',
  },
});
