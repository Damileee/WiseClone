import { View, Text, Pressable, TextInput } from 'react-native';
import { Link, router } from 'expo-router';

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-white">
      <Text className="text-3xl font-bold text-center mb-8">Create Account</Text>
      
      <View className="w-full max-w-xs">
        <TextInput
          placeholder="Email"
          className="p-4 border rounded-lg mb-4"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="p-4 border rounded-lg mb-6"
        />

        <Pressable
          onPress={() => router.replace('/(tabs)')}
          className="bg-blue-500 p-4 rounded-lg items-center mb-4"
        >
          <Text className="text-white font-bold">Register</Text>
        </Pressable>

        <Link href="/login" className="text-blue-500 text-center">
          Already have an account? Log in
        </Link>
      </View>
    </View>
  );
}