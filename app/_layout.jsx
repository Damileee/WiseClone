import { Stack } from 'expo-router';
import { useState } from 'react';

export default function RootLayout() {
  const [isLoggedIn] = useState(false); // Replace with real auth later

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="(auth)" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}