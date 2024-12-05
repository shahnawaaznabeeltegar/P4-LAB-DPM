export default function MatchInfo({ teamAName, teamBName, scoreA, scoreB, resetScores }) {
  return (
    <View style={styles.matchInfoContainer}>
      <Text style={styles.matchInfoText}>{teamAName} vs {teamBName}</Text>
      <Text style={styles.scoreText}>{scoreA} - {scoreB}</Text>
      {scoreA >= 10 && <Text style={styles.winnerText}>{teamAName} Menang!</Text>}
      {scoreB >= 10 && <Text style={styles.winnerText}>{teamBName} Menang!</Text>}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  matchInfoContainer: {
    padding: 20,
    marginBottom: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    width: '90%',
  },
  matchInfoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreText: {
    fontSize: 40,
    color: '#2575fc',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  winnerText: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
