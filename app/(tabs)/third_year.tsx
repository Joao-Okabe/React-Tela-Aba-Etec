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
            Terceiro Ano
          </Text>
        </View>
        
        <View
          style={[styles.subtitleBox]}
        >
          <Text
            style={[styles.subtitle, styles.whiteText]}
          >
            Técnico em 
          </Text>
          <Text
            style={[styles.subtitle, styles.whiteText]}
          >
            Informática para Internet
          </Text>
        </View>
        <View
          style={styles.textBox}
        >
          <Image
            source={require('../../assets/images/Google-flutter-logo.png')}
            style={{
              width: 100,
              aspectRatio: 0.8,
            }}
            resizeMode="contain"
          />
          <Text 
            style={[styles.subtitle, styles.whiteText]}
          >
            Estudo de desenvolvimento mobile 
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
    backgroundColor: '#ffacf7'
  },
  title: {
    fontSize: 40,
  },
  titleBox: {
    width: '80%',
    height: 150,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#bb2a51',
    marginTop: 30,
    backgroundColor: '#d83c65',
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
    borderColor: '#a32446',
    marginTop: 30,
    backgroundColor: '#ba3055',
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
    borderColor: '#ba3055',
    marginTop: 30,
    backgroundColor: '#cd4d6f',
    alignItems: 'center',
  },
});