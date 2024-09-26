import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button, Appbar } from "react-native-paper";
import styles from "./styles";

export default function UsuarioScreen({ navigation }) {
  const [usuarioData, setUsuarioData] = useState({
    nome: "",
    senha: "",
  });

  const handleInputChange = (name, value) => {
    setUsuarioData({ ...usuarioData, [name]: value });
  };

  const handleLogin = () => {
    const { nome, senha } = usuarioData;
    if (nome && senha) {
      navigation.navigate("Cliente");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Login de Usuário" titleStyle={styles.titleLogin} />
      </Appbar.Header>
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={usuarioData.nome}
          onChangeText={(text) => handleInputChange("nome", text)}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={usuarioData.senha}
          onChangeText={(text) => handleInputChange("senha", text)}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />

        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Entrar
        </Button>
      </View>
    </View>
  );
}