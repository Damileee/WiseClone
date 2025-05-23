import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HeaderWithButtons({ onSend, onAddMoney, onRequest }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Account</Text>
      <View style={styles.actions}>
        <Pressable style={styles.button} onPress={onSend}><Text>Send</Text></Pressable>
        <Pressable style={styles.button} onPress={onAddMoney}><Text>Add money</Text></Pressable>
        <Pressable style={styles.button} onPress={onRequest}><Text>Request</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#c4f59b',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
});