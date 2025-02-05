import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../../constants/styles';
import type { HomeScreenProps } from '../../types/navigation';



export default function HomeScreen({ navigation }: HomeScreenProps): React.JSX.Element {
    return (
        <ScrollView style={styles.container}>
            <View style={[styles.profileContainer, { alignItems: 'center' }]}>
                <Image
                    source={require('../../assets/1.jpg')}
                    style={[styles.profileImage, { width: '100%', height: 350, resizeMode: 'cover' }]}
                />
                <Text style={styles.name}>Harold Adrian Tabacoan</Text>
            </View>
        </ScrollView>
    );
}