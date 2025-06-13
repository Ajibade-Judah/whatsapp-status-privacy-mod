import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import facebookLogo from '../../assets/images/facebook.png'; // Adjust path if needed

export default function StatusPrivacyScreen() {
  const [selectedOption, setSelectedOption] = useState(0);
  const counts = {
    excluded: 0,
    included: 0,
  };

  const options = [
    { title: 'My contacts' },
    { title: 'My contacts except...', subtitle: `${counts.excluded} excluded` },
    { title: 'Only share with...', subtitle: `${counts.included} included` },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#000" style={{ paddingTop: 2 }} />
        <Text style={styles.headerText}>Status privacy</Text>
      </View>

      <View style={styles.divider} />

      {/* Section Title */}
      <Text style={styles.sectionHeaderLeft}>
        Who can see my status updates
      </Text>

      {/* Radio Options */}
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={() => setSelectedOption(index)}
        >
          <Ionicons
            name={selectedOption === index ? 'radio-button-on' : 'radio-button-off'}
            size={22}
            color="#128C7E"
            style={styles.radioIcon}
          />
          <View style={styles.optionRow}>
            <Text style={styles.optionTitle}>{option.title}</Text>
            {option.subtitle && (
              <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
            )}
          </View>
        </TouchableOpacity>
      ))}

      {/* Custom Privacy Option */}
      <TouchableOpacity
        style={styles.customOptionContainer}
        onPress={() => {
          // Handle custom privacy navigation here
          console.log('Navigate to custom privacy settings');
        }}
      >
        <View style={styles.customIconContainer}>
          <Ionicons
            name="add"
            size={16}
            color="#128C7E"
          />
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionTitle}>Custom privacy</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* Share Across Header */}
      <Text style={styles.sectionHeaderLeft}>
        Share my status updates across my accounts
      </Text>

      {/* Facebook Connection */}
      <View style={styles.fbContainer}>
        <Image
          source={facebookLogo}
          style={styles.fbIcon}
        />
        <View>
          <Text style={styles.fbTitle}>Facebook</Text>
          <Text style={styles.fbSubtitle}>John Doe</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Footer Note */}
      <Text style={styles.footerNote}>
        Changes to your privacy settings won't affect status updates that you've sent already.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
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
  sectionHeaderLeft: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 25,
    paddingRight: 15,
  },
  customOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingLeft: 25,
    paddingRight: 15,
  },
  customIconContainer: {
    width: 20,
    height: 20,
    borderRadius: 11,
    borderWidth: 1.75,
    borderColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    paddingTop: 1,
  },
  radioIcon: {
    marginRight: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  optionSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#128C7E',
    marginLeft: 'auto',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  fbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 15,
    marginBottom: 10,
  },
  fbIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    borderRadius: 18,
    backgroundColor: 'transparent',
  },
  fbTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  fbSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  footerNote: {
    fontSize: 13,
    color: '#777',
    paddingHorizontal: 15,
    marginTop: 10,
  },
});