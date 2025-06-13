import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

export default function CustomSelectionScreen() {
    const [customOption, setCustomOption] = useState<'exclude' | 'include'>('exclude');

    const radioOptions = [
      { key: 'exclude', label: 'Exclude Contacts' },
      { key: 'include', label: 'Include Contacts' },
    ];
    return (
 

    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" style={{ paddingTop: 2 }} />
        <Text style={styles.headerText}>Custom selection</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />
      {/* Custom Name Input Section */}
<View style={styles.inputSection}>
  <TextInput
    placeholder="Custom name"
    placeholderTextColor="#999"
    style={styles.textInput}
  />
  <TouchableOpacity style={styles.emojiButton}>
    <Ionicons name="happy-outline" size={22} color="#128C7E" />
  </TouchableOpacity>
</View>

{radioOptions.map((opt) => (
  <TouchableOpacity
    key={opt.key}
    style={styles.radioContainer}
    onPress={() => setCustomOption(opt.key as 'exclude' | 'include')}
  >
    <Ionicons
      name={customOption === opt.key ? 'radio-button-on' : 'radio-button-off'}
      size={22}
      color="#128C7E"
      style={styles.radioIcon}
    />
    <Text style={styles.radioLabel}>{opt.label}</Text>
  </TouchableOpacity>
))}





<TouchableOpacity style={styles.floatingButton}>
  <Ionicons name="arrow-forward" size={24} color="#fff" />
</TouchableOpacity>

      {/* Continue with more UI in next steps */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#128C7E',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    color: '#000',
  },
  emojiButton: {
    paddingLeft: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  
  radioIcon: {
    marginRight: 15,
  },
  

  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#128C7E',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  
});
