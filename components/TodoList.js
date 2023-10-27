import React from 'react';
import { StyleSheet, FlatList,View ,Text} from 'react-native';
import Button from './Button';
const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <View style={styles.todoItem}>
          <Text style={styles.todoText}>{item}</Text>
          <Button title="Remove" onPress={() => onRemoveTodo(item)} />
        </View>
      )}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  todoText: {
    fontSize: 16,
  },
});

export default TodoList;
