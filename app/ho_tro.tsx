import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const SupportScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendSupportRequest = () => {
    if (!email || !message) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    MailComposer.composeAsync({
      recipients: ['support@example.com'],
      subject: 'Support Request',
      body: `Email: ${email}\n\nMessage:\n${message}`,
    }).then(result => {
      if (result.status === 'sent') {
        Alert.alert('Success', 'Your support request has been sent');
      } else {
        Alert.alert('Error', 'Failed to send your support request');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <Button title="Send" onPress={handleSendSupportRequest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
  },
});

export default SupportScreen;
