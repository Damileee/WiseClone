import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { verticalScale } from '../../utils/responsive';
import ThemedView from '../../components/ThemedView';
import PrimaryButton from '../../components/PrimaryButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleSubmit = () => {
    console.log('Login form submitted', email, password);
    router.replace('/(tabs)/home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safe={true}>
        {/* Close Icon */}
        <Pressable onPress={() => router.back()} style={styles.closeButton}>
          <Ionicons name="close" size={27} color="#163300" />
        </Pressable>

        {/* Title */}
        <Text style={styles.title}>Log in</Text>

        <View style={styles.contentWrapper}>
          {/* Form Section */}
          <View style={styles.formWrapper}>
            <Text style={styles.label}>Your email</Text>
            <TextInput
              style={[
                styles.input,
                focusedInput === 'email' && styles.inputFocused,
              ]}
              onChangeText={setEmail}
              value={email}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                style={[
                  styles.input,
                  {
                    flex: 1,
                    borderColor: isPasswordFocused ? '#163300' : '#666',
                    borderWidth: isPasswordFocused ? 2 : 1,
                  },
                ]}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!showPassword}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
              <Pressable onPress={() => setShowPassword(prev => !prev)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#163300"
                  style={styles.eyeIcon}
                />
              </Pressable>
            </View>

            <PrimaryButton
              title="Log in"
              onPress={handleSubmit}
              backgroundColor="#9FE870"
              color="#163300"
              width="100%"
              marginTop={verticalScale(15)}
            />

            <Link href="/forgot-password" style={styles.troubleLink}>
              <Text style={styles.troubleText}>Trouble logging in?</Text>
            </Link>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <View style={styles.faceId}>
              <Image
                source={require('../../assets/img/faceId.png')}
                style={{ width: '15%', height: '40%' }}
              />
            </View>

            <View style={styles.separator}>
              <Text style={styles.separatorText}>Or log in with</Text>
            </View>

            <View style={styles.socialButtons}>
              <PrimaryButton
                onPress={() => {}}
                border
                backgroundColor="#666"
                width={'32%'}
                title={<AntDesign name="apple1" size={19} color="#000" />}
              />
              <PrimaryButton
                onPress={() => {}}
                border
                backgroundColor="#666"
                width={'32%'}
                title={<FontAwesome name="facebook" size={19} color="#1877F2" />}
              />
              <PrimaryButton
                onPress={() => {}}
                border
                backgroundColor="#666"
                width={'32%'}
                title={<AntDesign name="google" size={19} color="#DB4437" />}
              />
            </View>
          </View>
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  closeButton: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(25),
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#E5E5E5',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#163300',
    marginBottom: verticalScale(1),
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formWrapper: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  label: {
    color: '#163300',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#163300',
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: '#666',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: -35,
    padding: 5,
  },
  troubleLink: {
    marginVertical: verticalScale(8),
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  troubleText: {
    color: '#163300',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomSection: {
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  faceId: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: verticalScale(15),
  },
  separator: {
    alignItems: 'center',
    marginBottom: 20,
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#163300',
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 10,
  },
});