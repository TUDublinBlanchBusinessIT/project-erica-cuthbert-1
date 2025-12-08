import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

const campuses = [
  { label: 'Pick a campus', value: '' },
  { label: 'City Campus', value: 'city' },
  { label: 'Tallaght Campus', value: 'tallaght' },
  { label: 'Blanchardstown Campus', value: 'blanch' },
];

export default function StartScreen({ navigation })  {
  const [campus, setCampus] = useState('');
  const [podType, setPodType] = useState('single'); 
  const [dateTime, setDateTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [duration, setDuration] = useState(1); 

 return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Account</Text>
        <Text style={[styles.topBarText, styles.rightAlign]}>Home</Text>
      </View>

      <View style={styles.card}>

        {/* Campus Dropdown */}
        <Text style={styles.label}>Campus</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={campus}
            onValueChange={(value) => setCampus(value)}
            style={{ color: '#212121' }}
          >
            {campuses.map((c) => (
              <Picker.Item key={c.value} label={c.label} value={c.value} />
            ))}
          </Picker>
        </View>

        {/* Pod Selection */}
        <Text style={styles.label}>Pod Type</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity onPress={() => setPodType('single')} style={styles.radioRow}>
            <View style={styles.radioOuter}>
              {podType === 'single' && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Single Pod</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPodType('group')} style={styles.radioRow}>
            <View style={styles.radioOuter}>
              {podType === 'group' && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Group Pod</Text>
          </TouchableOpacity>
        </View>

        {/* Date & Time */}
        <Text style={styles.label}>Date & Time</Text>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.dateText}>
            {dateTime.toLocaleDateString()}   {dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={dateTime}
            mode="datetime"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selected) => {
              setShowPicker(false);
              if (selected) setDateTime(selected);
            }}
          />
        )}

        {/* Duration Slider */}
        <Text style={styles.label}>How many hours?</Text>
        <View style={styles.sliderContainer}>
          <Slider
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={duration}
            onValueChange={(v) => setDuration(v)}
          />
          <Text style={styles.durationText}>{duration} h</Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('ConfirmationScreen')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF', // TUD white
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#00A9B8', // TUD accent cyan
    padding: 12,
  },
  topBarText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  rightAlign: {
    marginLeft: 'auto',
  },
  card: {
    flex: 1,
    padding: 20,
  },
  label: {
    color: '#212121', // TUD dark grey
    marginTop: 12,
    marginBottom: 4,
    fontSize: 15,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 4,
  },
  radioGroup: {
    marginTop: 10,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#004E6C', // TUD primary blue
  },
  radioLabel: {
    color: '#212121',
    fontSize: 14,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#212121',
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
  },
  dateText: {
    color: '#212121',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    marginLeft: 12,
    color: '#212121',
  },
  nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#004E6C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 30,
  },
  nextText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});