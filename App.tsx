

import { useState } from 'react';

import { View , Text , StyleSheet} from 'react-native';


const Fatec = () => {
  const [titleText, TesteTexto] = useState("veja a menssagem [aberte aqui]");
  const bodyText = 'melhor faculdade de tecnologia';

  const onPressTitle = () => {
    TesteTexto('Fatec Zona Leste');
  }

  return(
    <View>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Fatec;
