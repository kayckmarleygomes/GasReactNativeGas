import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function FuelComparator() {
  const [gasolinePrice, setGasolinePrice] = useState<string>(''); 
  const [alcoholPrice, setAlcoholPrice] = useState<string>(''); 
  const [betterOption, setBetterOption] = useState<string>(''); 

  const compareFuel = () => {
    const gasoline = parseFloat(gasolinePrice);
    const alcohol = parseFloat(alcoholPrice);

    if (gasoline && alcohol) {
      const ratio = alcohol / gasoline;

      if (ratio < 0.7) {
        setBetterOption('Álcool é mais vantajoso.');
      } else {
        setBetterOption('Gasolina é mais vantajosa.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gasolina ou Álcool?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasolinePrice}
        onChangeText={(text) => setGasolinePrice(text)}
        placeholder="Preço da Gasolina (R$/L)"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={alcoholPrice}
        onChangeText={(text) => setAlcoholPrice(text)}
        placeholder="Preço do Álcool (R$/L)"
      />
      <Button title="Comparar" onPress={compareFuel} />

      {betterOption ? <Text style={styles.result}>{betterOption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FuelComparator;
