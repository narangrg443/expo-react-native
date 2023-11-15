import React from 'react';
import { View, Text, SectionList } from 'react-native';

function Section() {
  const users = [
    {
      id: 1,
      name: 'Harry',
      data: ['C', 'C++', 'Ruby'],
    },
    {
      id: 2,
      name: 'John',
      data: ['Java', 'Ada', 'Lua'],
    },
    {
      id: 3,
      name: 'Hary',
      data: ['Rust', 'PHP', 'JavaScript'],
    },
    {
      id: 4,
      name: 'Hary',
      data: ['C', 'Python', 'TypeScript'],
    },
  ];

  return (
    <View>
      <SectionList
        sections={users.map((user) => ({
          title: user.name,
          data: user.data,
        }))}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={{fontSize:18,color:'red'}}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Section;
