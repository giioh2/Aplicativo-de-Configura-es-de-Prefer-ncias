import React, { useState } from 'react';
import { View, Text, Button, Slider, Switch, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  // Estados
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  // Função para resetar preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Preferências</Text>

      {/* Picker - Seleção de Tema */}
      <Text style={styles.label}>Tema</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider - Ajuste do Tamanho da Fonte */}
      <Text style={styles.label}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
        step={1}
      />

      {/* Switch - Modo Noturno */}
      <Text style={styles.label}>Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}</Text>
      <Switch
        value={nightMode}
        onValueChange={(value) => setNightMode(value)}
      />

      {/* Botão de Reset */}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default App;
