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

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.card}>
          
          {/* Logo box */}
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>TUD LOGO</Text>
          </View>

          <Text style={styles.title}>Sign In</Text>

          {/* Email input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* Password input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Sign-in button */}
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Optional register text */}
          <Text style={styles.smallText}>
            Don’t have an account? Register
          </Text>

        </View>
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
    padding: 16,
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    alignSelf: 'center',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  smallText: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});

