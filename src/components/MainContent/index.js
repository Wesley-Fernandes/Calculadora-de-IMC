import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Form from '../Form';

export default function MainContent() {
  return (
    <View style={styles.window}>
        <Form/>
    </View>
  )
}

const styles = StyleSheet.create({
    window: {
        backgroundColor: '#ffff',
        flex: 1,
        width: '100%',
        borderRadius: 20,
        padding: 10
    }
});
