import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>
        ONE ACCOUNT FOR{"\n"}ALL THE MONEY IN{"\n"}THE WORLD
      </Text>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Your email"
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#666"
        />

        {/* Login Button */}
        <Pressable
          onPress={() => router.replace('/(tabs)')}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>

        {/* Trouble Login Link */}
        <Link href="/forgot-password" style={styles.link}>
          <Text style={styles.linkText}>Trouble logging in?</Text>
        </Link>

        {/* Separator */}
        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or log in with</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Facebook Login */}
        <Pressable style={styles.facebookButton}>
          <MaterialIcons name="facebook" size={24} color="#1877F2" />
          <Text style={styles.facebookText}>Continue with Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#000',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#00B9FF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginVertical: 15,
    alignSelf: 'center',
  },
  linkText: {
    color: '#00B9FF',
    fontSize: 14,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 15,
  },
  facebookText: {
    color: '#1877F2',
    fontSize: 16,
    fontWeight: '500',
  },
});