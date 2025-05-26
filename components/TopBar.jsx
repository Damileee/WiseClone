import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TopBar({ showBack = false, onBackPress, onNotificationPress, onEarnPress }) {
  return (
    <View style={styles.container}>
      {/* Left: Profile image or Back arrow */}
      <Pressable onPress={showBack ? onBackPress : undefined}>
        {showBack ? (
          <View style={styles.iconCircle}>
            <Ionicons name="arrow-back" size={20} color="#163300" />
          </View>
        ) : (
          <Image
            source={require('../assets/img/user.jpg')} // Change to your actual profile image
            style={styles.profileImage}
          />
        )}
      </Pressable>

      {/* Right side: Earn + Bell */}
      <View style={styles.rightSection}>
        <Pressable onPress={onEarnPress} style={styles.earnButton}>
          <Text style={styles.earnText}>Earn €90</Text>
        </Pressable>

        <Pressable onPress={onNotificationPress} style={styles.iconCircle}>
          <Ionicons name="notifications-outline" size={20} color="#163300" />
          <View style={styles.dot} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 33,
    height: 33,
    borderRadius: 18,
  },
  iconCircle: {
    width: 33,
    height: 33,
    borderRadius: 18,
    backgroundColor: '#F1F3EF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  earnButton: {
    backgroundColor: '#A3ED6C',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 999,
    marginRight: 20,
  },
  earnText: {
    color: '#163300',
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    top: 7,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});