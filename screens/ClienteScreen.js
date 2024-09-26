import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles';

export default function ClienteScreen({ navigation }) {
  const [clientData, setClientData] = useState({
    id: '',
    nome: '',
    cpf: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    telefone: '',
    foto: null,
  });

  const handleInputChange = (name, value) => {
    setClientData({ ...clientData, [name]: value });
  };

  const handleSaveClient = () => {
    const { id, nome, cpf, endereco, bairro, cidade, cep, telefone } = clientData;
    if (id && nome && cpf && endereco && bairro && cidade && cep && telefone) {
      alert('Cliente salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Appbar.Header style={styles.header}>
        {/* <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} /> */}
        <Appbar.Content title="Cadastro de Cliente" titleStyle={styles.titleCliente} />
      </Appbar.Header>
      <View style={styles.containerCliente}>
        <View style={styles.photoContainer}>
          <View style={styles.photo} />
        </View>
        {Object.keys(clientData).map((key) => (
          key !== 'foto' && (
            <TextInput
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={clientData[key]}
              onChangeText={(text) => handleInputChange(key, text)}
              style={styles.inputCliente}
              mode="outlined"
              keyboardType={key === 'cpf' || key === 'cep' || key === 'telefone' ? 'numeric' : 'default'}
            />
          )
        ))}
        <Button mode="contained" onPress={handleSaveClient} style={styles.buttonCliente}>
          Salvar Cliente
        </Button>
      </View>
    </View>
  );
}