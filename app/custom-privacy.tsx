import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Stack } from 'expo-router';

interface Contact {
  id: string;
  name: string;
  isSelected: boolean;
}

export default function CustomPrivacyScreen() {
  const [customName, setCustomName] = useState('');
  const [selectedMode, setSelectedMode] = useState<'exclude' | 'include'>('exclude');
  
  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: 'Alice Anderson', isSelected: false },
    { id: '2', name: 'Bob Baker', isSelected: false },
    { id: '3', name: 'Carol Carter', isSelected: false },
    { id: '4', name: 'David Davis', isSelected: false },
    { id: '5', name: 'Emma Evans', isSelected: false },
    { id: '6', name: 'Frank Foster', isSelected: false },
    { id: '7', name: 'Grace Green', isSelected: false },
    { id: '8', name: 'Henry Harris', isSelected: false },
    { id: '9', name: 'Ivy Jackson', isSelected: false },
    { id: '10', name: 'Jack Johnson', isSelected: false },
    { id: '11', name: 'Kate Kelly', isSelected: false },
    { id: '12', name: 'Liam Lewis', isSelected: false },
    { id: '13', name: 'Maya Miller', isSelected: false },
    { id: '14', name: 'Noah Nelson', isSelected: false },
    { id: '15', name: 'Olivia Owen', isSelected: false },
    { id: '16', name: 'Paul Parker', isSelected: false },
    { id: '17', name: 'Quinn Queen', isSelected: false },
    { id: '18', name: 'Ryan Roberts', isSelected: false },
    { id: '19', name: 'Sara Smith', isSelected: false },
    { id: '20', name: 'Tom Taylor', isSelected: false },
    { id: '21', name: 'Uma Underwood', isSelected: false },
    { id: '22', name: 'Victor Vance', isSelected: false },
    { id: '23', name: 'Wendy White', isSelected: false },
    { id: '24', name: 'Xavier Cross', isSelected: false },
    { id: '25', name: 'Yara Young', isSelected: false },
    { id: '26', name: 'Zoe Zhang', isSelected: false },
  ]);

  const selectedCount = contacts.filter(contact => contact.isSelected).length;

  const toggleContact = (contactId: string) => {
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === contactId
          ? { ...contact, isSelected: !contact.isSelected }
          : contact
      )
    );
  };

  const renderContact = ({ item }: { item: Contact }) => (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={() => toggleContact(item.id)}
    >
      {/* Profile Picture Placeholder */}
      <View style={styles.profilePicture}>
        <Ionicons name="person" size={24} color="#999" />
      </View>
      
      {/* Contact Name */}
      <Text style={styles.contactName}>{item.name}</Text>
      
      {/* Round Checkbox */}
      <View style={[
        styles.roundCheckbox,
        item.isSelected && styles.roundCheckboxSelected
      ]}>
        {item.isSelected && (
          <Ionicons name="checkmark" size={16} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>Custom privacy</Text>
            <Text style={styles.subText}>
              {selectedCount} contacts {selectedMode === 'exclude' ? 'excluded' : 'included'}
            </Text>
          </View>
        </View>

        {/* Custom Name Input with Image Icon */}
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            {/* Landscape Icon */}
            <View style={styles.landscapeIcon}>
              <Ionicons name="image" size={20} color="#128C7E" />
            </View>
            
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Custom list name"
                value={customName}
                onChangeText={setCustomName}
                placeholderTextColor="#999"
              />
              {/* Emoji Icon */}
              <TouchableOpacity style={styles.emojiIcon}>
                <Ionicons name="happy-outline" size={20} color="#128C7E" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Separation Line */}
        <View style={styles.divider} />

        {/* Radio Options */}
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedMode('exclude')}
        >
          <Ionicons
            name={selectedMode === 'exclude' ? 'radio-button-on' : 'radio-button-off'}
            size={22}
            color="#128C7E"
            style={styles.radioIcon}
          />
          <Text style={styles.radioText}>Exclude contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setSelectedMode('include')}
        >
          <Ionicons
            name={selectedMode === 'include' ? 'radio-button-on' : 'radio-button-off'}
            size={22}
            color="#128C7E"
            style={styles.radioIcon}
          />
          <Text style={styles.radioText}>Include contacts</Text>
        </TouchableOpacity>

        {/* Separation Line */}
        <View style={styles.divider} />

        {/* Contacts List */}
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={renderContact}
          style={styles.contactsList}
          showsVerticalScrollIndicator={false}
        />

        {/* Floating Save Button */}
        <TouchableOpacity style={styles.floatingButton}>
          <Ionicons name="checkmark" size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
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
  headerContent: {
    marginLeft: 10,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'normal',
  },
  subText: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  inputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  landscapeIcon: {
    marginRight: 12,
    padding: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#128C7E',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  emojiIcon: {
    marginLeft: 8,
    padding: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E7',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  radioIcon: {
    marginRight: 12,
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  contactsList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactName: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  roundCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  roundCheckboxSelected: {
    backgroundColor: '#128C7E',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: '#128C7E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});