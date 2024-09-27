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
      <View style={styles.calculator}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  calculator: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    // boxShadow removido
    maxWidth: 400,
    width: '100%',
    textAlign: 'center',
    elevation: 5, // Usado para sombra em Android
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#467c30',
    textAlign: 'center',
  },
});

export default FuelComparator;
