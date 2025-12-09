import React, { useState } from 'react';
import { auth } from "./firebaseConfig";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default function ConfirmationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () =>
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Success", "Account created!");
        navigation.navigate("StartScreen");
      })
      .catch((e) => Alert.alert("Error", e.message));

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Confirm Booking</Text>
      </View>

      <View style={styles.card}>

        <View style={styles.logoBox}>
          <Image
            source={require('./assets/TUD-Logo-MA.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <TextInput
          placeholder="Enter your email"
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

        <Text style={styles.infoText}>
          You will receive a confirmation email and text message.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={register}
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
  logoImage: {
    width: '100%',
    height: '100%',
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