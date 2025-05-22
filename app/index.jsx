import { View, Text, ScrollView, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale, getResponsiveFont} from '../utils/responsive';

import ThemedWorldImg from '../components/ThemedWorldImg';
import ThemedView from '../components/ThemedView';
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const  theme = colorScheme === 'dark' ? true : false;
  return (
    <ThemedView style={styles.container} safe={true} >

      <ThemedView style={[styles.topBar, { backgroundColor: theme ? '#9FE870' : '#163300' } ]} />

      <View style={styles.balanceContainer}>
        <ThemedWorldImg style={styles.image}/>
      </View>
    
      <View style={styles.balanceContainer}>
        <Text style={[styles.headerText, { color: theme ? '#fff' : '#163300' }]}>
            ONE ACCOUNT FOR{"\n"}ALL THE MONEY IN{"\n"}THE WORLD
        </Text>
      </View>

      <View style={styles.actionsRow}>
        <PrimaryButton title="Log in" onPress={() => router.push('/login')} width='50%' />
        <PrimaryButton title="Register" onPress={() => router.push('/register')} width='50%' />
      </View>
      <PrimaryButton
        title="Continue with Facebook"
        onPress={() => console.log('Facebook')}
        backgroundColor={theme ? '#9FE870' : '#163300'}
        color={theme ? '#9FE870' : '#163300'}
        border={true}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  topBar: {
    borderRadius: 16,
    marginBottom: 30,
    marginTop: 38,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: getResponsiveFont(),
    marginTop: verticalScale(135),
    lineHeight: verticalScale(33),
    textAlign: 'center',
    fontWeight: '900',
  },
  image: {
    width: scale(350),
    height: verticalScale(210),
    marginTop: verticalScale(50),
  },
  actionsRow: {
    flexDirection: 'row',
    gap: scale(8),
    marginTop: verticalScale(50),
  },
});