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

const App = () => {
  const [campus, setCampus] = useState('');
  const [podType, setPodType] = useState('single'); 
  const [dateTime, setDateTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [duration, setDuration] = useState(1); 

  const onChangeDateTime = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) setDateTime(selectedDate);
  };

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Top bar like “Account | Home” */}
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Account</Text>
          <Text style={[styles.topBarText, styles.topBarRight]}>Home</Text>
        </View>

        {/* Main content */}
        <View style={styles.card}>
          {/* Campus picker */}
          <Text style={styles.label}>Campus</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={campus}
              onValueChange={(value) => setCampus(value)}
            >
              {campuses.map((c) => (
                <Picker.Item key={c.value || 'none'} label={c.label} value={c.value} />
              ))}
            </Picker>
          </View>

          {/* Radio buttons for pod type */}
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioRow}
              onPress={() => setPodType('single')}
            >
              <View style={styles.radioOuter}>
                {podType === 'single' && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioLabel}>Single Pod</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioRow}
              onPress={() => setPodType('group')}
            >
              <View style={styles.radioOuter}>
                {podType === 'group' && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioLabel}>Group Pod</Text>
            </TouchableOpacity>
          </View>

          {/* Date & time picker */}
          <Text style={styles.label}>Date & Time</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowPicker(true)}
          >
            <Text style={styles.dateText}>
              {formattedDate}   {formattedTime}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={dateTime}
              mode="datetime"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChangeDateTime}
              minimumDate={new Date()}
            />
          )}

          {/* Duration slider */}
          <Text style={styles.label}>How many hours</Text>
          <View style={styles.sliderRow}>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={duration}
              onValueChange={(value) => setDuration(value)}
            />
            <Text style={styles.durationText}>{duration} h</Text>
          </View>

          {/* Next button – doesn’t navigate yet, just placeholder */}
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextText}>Next &gt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginBottom: 12,
  },
  topBarText: {
    fontSize: 14,
  },
  topBarRight: {
    marginLeft: 'auto',
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginBottom: 12,
  },
  radioGroup: {
    marginVertical: 8,
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
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioLabel: {
    fontSize: 14,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
  durationText: {
    width: 40,
    textAlign: 'center',
  },
  nextButton: {
    alignSelf: 'flex-end',
    marginTop: 24,
  },
  nextText: {
    fontSize: 16,
  },
});

export default App;

/* Note to self- laptop cannot download npx or npv */
