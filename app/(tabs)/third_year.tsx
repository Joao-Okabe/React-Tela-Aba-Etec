import { ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.Container}
    >
      <Text 
        style={styles.title}
      >
        Terceiro Ano
      </Text>
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({  
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  fundo: {
    backgroundColor: 'white'
  },
  title: {
    fontSize: 40,
    marginTop: 40,
    marginBottom: 80,
  },
});