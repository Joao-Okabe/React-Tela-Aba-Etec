import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
      <ScrollView
        style={styles.fundo}
        contentContainerStyle={styles.Container}
      >
        <View
          style={[styles.titleBox]}
        >
          <Text 
            style={[styles.title, styles.whiteText]}
          >
            Segundo Ano
          </Text>
        </View>
        
        <View
          style={[styles.subtitleBox]}
        >
          <Text
            style={[styles.subtitle, styles.whiteText]}
          >
            Programador de Computadores
          </Text>
        </View>
        <View
          style={styles.textBox}
        >
          <Image
            source={require('../../assets/images/phpbackend.png')}
            style={{
              width: 100,
              aspectRatio: 0.8,
            }}
            resizeMode="contain"
          />
          <Text 
            style={[styles.subtitle, styles.whiteText]}
          >
            Estudo de programação back-end 
          </Text>
        </View>
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
    backgroundColor: '#263325'
  },
  title: {
    fontSize: 40,
  },
  titleBox: {
    width: '80%',
    height: 150,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#112707',
    marginTop: 30,
    backgroundColor: '#16380a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
  },
  subtitleBox: {
    width: '80%',
    height: 150,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#132c09',
    marginTop: 30,
    backgroundColor: '#19350f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white'
  },
  textBox: {
    width: '80%',
    height: 430,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#0e2406',
    marginTop: 30,
    backgroundColor: '#133009',
    alignItems: 'center',
  },
});