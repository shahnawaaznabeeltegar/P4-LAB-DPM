import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet, ScrollView } from 'react-native';
import TeamCard from './src/components/TeamCard';
import MatchInfo from './src/components/MatchInfo';

export default function App() {
  // State untuk menyimpan skor dan nama tim
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [teamAName, setTeamAName] = useState('Tim A');
  const [teamBName, setTeamBName] = useState('Tim B');

  // Fungsi untuk menambah skor
  const addScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('Selamat!', `${teamAName} menang!`);
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('Selamat!', `${teamBName} menang!`);
    }
  };

  // Fungsi untuk mengurangi skor
  const subtractScore = (team) => {
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Futsal</Text>

      <MatchInfo
        teamAName={teamAName}
        teamBName={teamBName}
        scoreA={scoreA}
        scoreB={scoreB}
        resetScores={resetScores}
      />

      <TeamCard
        teamName={teamAName}
        score={scoreA}
        addScore={() => addScore('A')}
        subtractScore={() => subtractScore('A')}
        onChangeName={(newName) => setTeamAName(newName)}
      />

      <TeamCard
        teamName={teamBName}
        score={scoreB}
        addScore={() => addScore('B')}
        subtractScore={() => subtractScore('B')}
        onChangeName={(newName) => setTeamBName(newName)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
