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
          Primeiro Ano
        </Text>
      </View>
      
      <View
        style={[styles.subtitleBox]}
      >
        <Text
          style={[styles.subtitle, styles.whiteText]}
        >
          Auxiliar de Informática
        </Text>
        <Text
          style={[styles.subtitle, styles.whiteText]}
        >
          para Internet
        </Text>
      </View>
      <View
        style={styles.textBox}
      >
        <Image
          source={require('../../assets/images/html_css_js.png')}
          style={{
            width: 100,
            aspectRatio: 0.8,
          }}
          resizeMode="contain"
        />
        <Text 
          style={[styles.subtitle, styles.whiteText]}
        >
          Estudo e programação Front-End
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
    backgroundColor: '#392F48'
  },
  title: {
    fontSize: 40,
  },
  titleBox: {
    width: '80%',
    height: 150,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#2c1c44',
    marginTop: 30,
    backgroundColor: '#31214a',
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
    borderColor: '#2a1945',
    marginTop: 30,
    backgroundColor: '#311f4e',
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
    borderColor: '#2a1945',
    marginTop: 30,
    backgroundColor: '#311f4e',
    alignItems: 'center',
  },
});