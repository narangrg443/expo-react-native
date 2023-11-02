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

  return (
    <View style={styles.container}>
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
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <Text>
              ID: {item.id}, Name: {item.name}
            </Text>
          )}
        />
      )}
    </View>
  );
}
