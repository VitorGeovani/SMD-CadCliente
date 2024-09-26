import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles';

export default function FinanceiroScreen({ navigation }) {
  const [financeData, setFinanceData] = useState({
    id: '',
    nome: '',
    notaFiscal: '',
    telefone: '',
    valorUnitario: '',
    valorVarejo: '',
    valorAtacado: '',
  });

  const handleInputChange = (name, value) => {
    setFinanceData({ ...financeData, [name]: value });
  };

  const handleSaveFinance = () => {
    const { id, nome, notaFiscal, telefone, valorUnitario, valorVarejo, valorAtacado } = financeData;
    if (id && nome && notaFiscal && telefone && valorUnitario && valorVarejo && valorAtacado) {
      alert('Dados financeiros salvos com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Appbar.Header style={styles.header}>
        {/* <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} /> */}
        <Appbar.Content title="Cadastro Financeiro" titleStyle={styles.titleFinanceiro} />
      </Appbar.Header>
      <View style={styles.containerFinanceiro}>
        {Object.keys(financeData).map((key) => (
          <TextInput
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            value={financeData[key]}
            onChangeText={(text) => handleInputChange(key, text)}
            style={styles.inputFinanceiro}
            mode="outlined"
            keyboardType={['valorUnitario', 'valorVarejo', 'valorAtacado'].includes(key) ? 'numeric' : 'default'}
          />
        ))}
        <Button mode="contained" onPress={handleSaveFinance} style={styles.buttonFinanceiro}>
          Salvar Dados Financeiros
        </Button>
      </View>
    </View>
  );
}