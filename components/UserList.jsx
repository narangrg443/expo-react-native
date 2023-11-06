import React, { useState, useEffect, useMemo } from 'react';
import { Text, Button, View, FlatList, Modal, TextInput } from 'react-native';
import styles from '../style/AppStyle';

const UserList = ({ onPress }) => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]); // Initialize with the same data as users
  const [searchText, setSearchText] = useState('');

  const searchFilter = (text) => {
    setSearchText(text);
    const lowerText = text.toLowerCase();
    setFilteredUsers(
      users.filter((item) => item.name.toLowerCase().includes(lowerText))
    );
  };

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (response.ok) {
        const users = await response.json();
        setUsers(users);
        setFilteredUsers(users); // Initialize filteredUsers with full data
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

  return (
    <View style={styles.listContainer}>
      <View style={styles.listButton}>
        <Button title="Add" onPress={onPress} />
      </View>
      <View>
        <TextInput
          value={searchText}
          onChangeText={searchFilter}
          placeholder="Search names"
        />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        <FlatList
          data={filteredUsers}
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
      </View>
<View style={styles.modalContainer}>
      {/* Update Modal */}
      <Modal visible={isUpdateModalVisible} animationType="slide">
        <View style={styles.modalChildContainer}>
          <Text>Update User</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
          />
          <Button title="Update" onPress={() => updateData(id, name, age)} />
          <Button title="Cancel" onPress={() => setUpdateModalVisible(false)} />
        </View>
      </Modal>
      </View>
    </View>
  );
};

export default UserList;
