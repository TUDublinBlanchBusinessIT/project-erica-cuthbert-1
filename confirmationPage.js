import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function ConfirmationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Confirm Booking</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>TUD LOGO</Text>
        </View>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#777"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Enter phone number"
          placeholderTextColor="#777"
          keyboardType="phone-pad"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.infoText}>
          You will receive a confirmation email and text message.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StartScreen")}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
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
    fontWeight: '600',
    fontSize: 18,
  },
  card: {
    flex: 1,
    padding: 24,
  },
  logoBox: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: '#212121',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    color: '#212121',
  },
  input: {
    borderWidth: 1,
    borderColor: '#212121',
    padding: 10,
    borderRadius: 4,
    marginBottom: 18,
    color: '#212121',
  },
  infoText: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#004E6C',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  backText: {
    color: '#004E6C',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
  },
});