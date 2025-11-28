import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ConfirmationScreen() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleConfirm = () => {
    // later you can send this to Firebase or navigate
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

          {/* Email input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Phone input */}
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          {/* Info text */}
          <Text style={styles.infoText}>
            You will receive a confirmation email and text message.
          </Text>

          {/* Button (optional) */}
          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
  },
  logoBox: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 24,
  },
  button: {
    marginTop: 'auto',
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 14,
  },
});
