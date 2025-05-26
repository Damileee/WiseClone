import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ThemedView from '../../components/ThemedView';
import BalanceCard from '../../components/BalanceCard';
import HeaderWithButtons from '../../components/HeaderWithButtons';
import TopBar from '../../components/TopBar';
// import SectionTitle from '../../components/SectionTitle';

export default function Home() {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TopBar 
          onNotificationPress={() => console.log('Notifications')}
          onEarnPress={() => console.log('Earn')}
        />

        <HeaderWithButtons
          onSend={() => {}}
          onAddMoney={() => {}}
          onRequest={() => {}}
        />

        <View style={styles.row}>
          <BalanceCard currency="EUR" amount="0.00" />
          <BalanceCard currency="USD" amount="14.25" />
        </View>

        {/* Add other components like TaskCard, ExchangeRateChart, etc. here */}

      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scroll: {
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});