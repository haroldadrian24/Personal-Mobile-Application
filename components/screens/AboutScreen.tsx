import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../constants/styles';
import type { AboutScreenProps } from '../../types/navigation';

interface Hobby {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function AboutScreen({ navigation }: AboutScreenProps): React.JSX.Element {
  interface Hobby {
    name: string;
    icon?: keyof typeof Ionicons.glyphMap;
    image?: any; // For image source
  }

  const hobbies: Hobby[] = [
    { name: 'Playing Basketball', image: require('../../assets/ball.png') },
    { name: 'Watching Movies', image: require('../../assets/nflix.png') },
    { name: 'Playing Computer Games', image: require('../../assets/valorant.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>About Me</Text>
      <Text style={styles.bio}>
      A 3rd year BSIT student at the University of Science and Technology of Southern Philippines. 21 years of age, and currently residing in Cagayan de Oro City.
      </Text>
      
      <Text style={styles.subHeader}>Hobbies</Text>
      {hobbies.map((hobby, index) => (
      <View key={index} style={styles.hobbyItem}>
        {hobby.icon ? (
          <Ionicons name={hobby.icon} size={24} color="white" />
        ) : (
          <Image source={hobby.image} style={{ width: 24, height: 24 }} />
        )}
        <Text style={styles.hobbyText}>{hobby.name}</Text>
      </View>
      ))}
    </ScrollView>
  );
}