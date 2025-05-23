import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BalanceCard({ currency, amount }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* <Image source={require('../assets/img/euro.png')} style={styles.icon} /> */}
        <Text style={styles.currency}>{currency}</Text>
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eef2ed',
    padding: 15,
    borderRadius: 12,
    width: '48%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: '600',
  },
  icon: {
    width: 25,
    height: 25,
  },
});