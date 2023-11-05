import React, { useState, useEffect, useMemo } from 'react';
import { Text, Button, View, FlatList, Modal, TextInput } from 'react-native';
import styles from '../style/AppStyle';

const UserList = ({ onPress }) => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (response.ok) {
        const users = await response.json();
        setUsers(users);
      } else {
        console.log('Response error');
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Delete data
  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('User deleted successfully');
        // After a successful delete, you can refresh the user list by calling getData()
        getData();
      } else {
        console.log('Delete request failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Open update modal
  const openUpdateModal = (id) => {
    setId(id);
    setUpdateModalVisible(true);
  };

  // Update data
  const updateData = async (id, name, age) => {
    try {
      
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      });
      if (response.ok) {
        console.log('User updated successfully');
        setUpdateModalVisible(false);
        // After a successful update, you can refresh the user list by calling getData()
        getData();
        setAge('');
        setName('');
      } else {
        console.log('Update request failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const memoizedFlatList = useMemo(() => {
    return (
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.eachItem}>
            <Text style={styles.itemStyle}>
              {item.id}:{item.name}
            </Text>
            <Text style={styles.itemStyle}>age:{item.age}</Text>

            <View style={styles.updateDelete}>
              <Button title="delete" onPress={() => deleteData(item.id)} />
              <Button title="update" onPress={() => openUpdateModal(item.id)} />
            </View>
          </View>
        )}
      />
    );
  }, [users]);

  return (
    <View style={styles.listContainer}>
      <View style={styles.listButton}>
        <Button title="Add" onPress={onPress} />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        {memoizedFlatList}
      </View>

      {/* Update Modal */}
      <Modal
        visible={isUpdateModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text>Update User</Text>
          <TextInput
          style={[styles.inputContainer,{marginBottom:5}]}
            placeholder={name}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={[styles.inputContainer,{marginBottom:5}]}
           
            placeholder={age}
            value={age}
            onChangeText={(text) => setAge(text)}
          />
          <Button title="Update" onPress={() => updateData(id, name, age)} />
          <Button title="Cancel" onPress={() => setUpdateModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default UserList;
