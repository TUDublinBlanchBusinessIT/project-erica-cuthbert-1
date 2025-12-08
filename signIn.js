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

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("StartScreen");
      })
      .catch(error => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>TUD LOGO</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>

        <TextInput
          placeholder="Enter student email"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Enter password"
          placeholderTextColor="#777"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    padding: 16,
    backgroundColor: '#00A9B8',
  },
  topBarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: '#212121',
    marginBottom: 32,
    textAlign: 'center',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#212121',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 20,
    color: '#212121',
  },
  button: {
    backgroundColor: '#004E6C',
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkText: {
    textAlign: 'center',
    color: '#004E6C',
    marginTop: 10,
    fontSize: 14,
  }
});

