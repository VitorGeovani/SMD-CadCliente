import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles';

export default function FornecedorScreen({ navigation }) {
  const [supplierData, setSupplierData] = useState({
    id: '',
    nome: '',
    endereco: '',
    cpfCnpj: '',
    cep: '',
    telefone: '',
  });

  const handleInputChange = (name, value) => {
    setSupplierData({ ...supplierData, [name]: value });
  };

  const handleSaveSupplier = () => {
    const { id, nome, endereco, cpfCnpj, cep, telefone } = supplierData;
    if (id && nome && endereco && cpfCnpj && cep && telefone) {
      alert('Fornecedor salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Appbar.Header style={styles.header}>
        {/* <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} /> */}
        <Appbar.Content title="Cadastro de Fornecedor" titleStyle={styles.titleFornecedor} />
      </Appbar.Header>
      <View style={styles.containerFornecedor}>
        {Object.keys(supplierData).map((key) => (
          <TextInput
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={supplierData[key]}
            onChangeText={(text) => handleInputChange(key, text)}
            style={styles.inputFornecedor}
            mode="outlined"
            keyboardType={['cpfCnpj', 'cep'].includes(key) ? 'numeric' : 'default'}
          />
        ))}
        <Button mode="contained" onPress={handleSaveSupplier} style={styles.buttonFornecedor}>
          Salvar Fornecedor
        </Button>
      </View>
    </View>
  );
}