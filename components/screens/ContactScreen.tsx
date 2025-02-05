import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../constants/styles';
import type { ContactScreenProps } from '../../types/navigation';

interface ContactItem {
  platform: string;
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
}

export default function ContactScreen({ navigation }: ContactScreenProps): React.JSX.Element {
    interface ContactItem {
        platform: string;
        image: any;
        url: string;
    }

    const contacts: ContactItem[] = [
        { 
            platform: 'Facebook', 
            image: require('../../assets/facebook.png'), 
            url: 'https://www.facebook.com/tabacoan.haroldadrian' 
        },
        { 
            platform: 'Instagram', 
            image: require('../../assets/insta.png'), 
            url: 'https://www.instagram.com/edreyaaaan/' 
        },
        { 
            platform: 'Discord', 
            image: require('../../assets/discord.png'), 
            url: 'https://discord.com/channels/1013511356676313191/1013521264306306787' 
        },
    ];

    const handlePress = async (url: string): Promise<void> => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            console.warn(`Unable to open URL: ${url}`);
        }
    };
    return (
        <ScrollView 
            style={[styles.container, { flex: 1 }]} 
            contentContainerStyle={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}
        >
            <Text style={styles.header}>Connect with me:</Text>
            {contacts.map((contact, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.contactItem, { alignSelf: 'stretch', flexDirection: 'row', alignItems: 'center' }]}
                    onPress={() => handlePress(contact.url)}
                >
                    <Image source={contact.image} style={{ width: 24, height: 24, marginRight: 10 }} />
                    <Text style={styles.contactText}>{contact.platform}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}
