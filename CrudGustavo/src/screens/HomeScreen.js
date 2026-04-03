import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }) {
  // estado da lista
  const [people, setPeople] = useState([]);
  const [filtro, setFiltro] = useState("");

  // função para carregar dados
  async function loadPeople() {
    const data = await getPeople();

    setPeople(data);
  }
  // executa ao abrir tela
  useEffect(() => {
    loadPeople();
  }, []);
  const nomesFiltro = people.filter(pessoa => {
    const pessoaNome = `${pessoa.firstName || pessoa.firstname} ${pessoa.lastName || pessoa.lastname}`.toLowerCase().trim();
    //apanhei pra fazer o filtro pegar o firstname e firstName, nada que o bom e velho Google nao ajude
    return pessoaNome.includes(filtro.toLowerCase().trim());//.trim() tira o espaço que o usuario digita pra nao bugar o filtro
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoas</Text>
      <TextInput
        style={styles.input}
        placeholder="Procure aqui"
        value={filtro}
        onChangeText= {setFiltro}
        />

      <Button
        title="Adicionar Pessoa"
        onPress={() => navigation.navigate("AddEdit")}
      />
      <FlatList
        data={nomesFiltro}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPersonal
            item={item}
            navigation={navigation}
            refresh={loadPeople}
          />
        )}
      />
    </View>
  );
}

function CardPersonal({ item, navigation, refresh }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
          {item.firstname} {item.lastname}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>

      <View>
        <Button
          title="Editar"
          onPress={() => navigation.navigate("AddEdit", { person: item })}
        />
        <Button
          title="Deletar"
          onPress={async () => {
            await deletePerson(item.id);
            refresh();
          }}
        />
      </View>
    </View>
  );
}
