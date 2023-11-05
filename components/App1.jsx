import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import styles from './style/AppStyle';

export default function App() {
  const postUrl = 'http://localhost:3000/users';
  const getUsersUrl = 'http://localhost:3000/users';
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchName, setSearchName] = useState('');

  const postData = async () => {
    const dataToPost = {
      name: name,
      age: age,
      email: email,
    };

    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToPost),
      });

      if (response.ok) {
        setMessage('Post is successful');
      } else {
        setMessage('Post failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(getUsersUrl);
      if (response.ok) {
        const userData = await response.json();
        setUsers(userData);
        setShowUsers(true);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${getUsersUrl}/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('User deleted successfully');
        setUsers(users.filter((user) => user.id !== userId));
      } else {
        setMessage('Failed to delete user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async () => {
    const updatedUser = {
      name: name,
      age: age,
      email: email,
    };

    try {
      const response = await fetch(`${getUsersUrl}/${selectedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        setMessage('User updated successfully');
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === selectedUserId ? { ...user, ...updatedUser } : user
          )
        );
      } else {
        setMessage('Failed to update user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterUsers = () => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    return filteredUsers;
  };

  return (
    <View style={styles.container}>
    <View style={styles.appContainer}>
      {/* Search bar */}
      <TextInput
        value={searchName}
        placeholder="Search by Name"
        onChangeText={(text) => setSearchName(text)}
        style={styles.input}
      />
      <Button title="Search" onPress={() => setShowUsers(true)} />

      {/* User input and display */}
      <TextInput
        value={name}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        value={age}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
        style={styles.input}
      />
      <TextInput
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Button title="Post" onPress={postData} />
      <Button title="Show Users" onPress={fetchUsers} />

      {message ? <Text>{message}</Text> : null}

      {showUsers && (
        <FlatList
          data={filterUsers()}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
            <View style={{flexDirection:'column',margin:10}}>
              <Text>
                ID: {item.id}, Name: {item.name}
              </Text>
              <Text>age:{age} email:{email}</Text>
              </View>
            <View style={styles.buttonView}>
              <Button 
              title="Delete" onPress={() => deleteUser(item.id)} />
             
              <Button 
                title="Update"
                onPress={() => {
                  setName(item.name);
                  setAge(item.age.toString());
                  setEmail(item.email);
                  setSelectedUserId(item.id);
                }}
              />
              </View>
            </View>
          )}
        />
      )}

      {selectedUserId && (
        <Button title="Save Update" onPress={updateUser} />
      )}
      </View>
    </View>
  );
}
