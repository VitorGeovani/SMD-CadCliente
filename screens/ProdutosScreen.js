import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles';

export default function ProdutosScreen({ navigation }) {
  const [productData, setProductData] = useState({
    id: '',
    nome: '',
    descricao: '',
    valor: '',
    tamanho: '',
  });

  const handleInputChange = (name, value) => {
    setProductData({ ...productData, [name]: value });
  };

  const handleSaveProduct = () => {
    const { id, nome, descricao, valor, tamanho } = productData;
    if (id && nome && descricao && valor && tamanho) {
      alert('Produto salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Appbar.Header style={styles.header}>
        {/* <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} /> */}
        <Appbar.Content title="Cadastro de Produto" titleStyle={styles.titleProdutos} />
      </Appbar.Header>
      <View style={styles.containerProdutos}>
        {Object.keys(productData).map((key) => (
          <TextInput
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={productData[key]}
            onChangeText={(text) => handleInputChange(key, text)}
            style={styles.inputProdutos}
            mode="outlined"
            keyboardType={key === 'valor' ? 'numeric' : 'default'}
          />
        ))}
        <Button mode="contained" onPress={handleSaveProduct} style={styles.buttonProdutos}>
          Salvar Produto
        </Button>
      </View>
    </View>
  );
}
