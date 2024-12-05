import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function TeamCard({ teamName, score, addScore, subtractScore, onChangeName }) {
  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        value={teamName}
        onChangeText={onChangeName}
        placeholder="Nama Tim"
      />
      <Text style={styles.score}>{score}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={addScore}>
          <Text style={styles.buttonText}>+ Tambah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtractScore}>
          <Text style={styles.buttonText}>- Kurangi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  score: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
