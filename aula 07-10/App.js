import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native'
import Tarefa from './src/Tarefa';

export default function App() {

  const [tarefa, setTarefa] = useState('')
  const [list, setList] = useState([
    {
      key: '1',
      item: 'Comprar pão'
    },
    {
      key: '2',
      item: 'Estudar React Native'
    },
    {
      key: '3',
      item: 'Pagar conta de luz'
    }
  ])


  function btn() {
    alert(tarefa);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput placeholder='Digite sua Tarefa' style={styles.input} value={tarefa} onChangeText={(text) => setTarefa(text)}>
        </TextInput>

        <TouchableOpacity style={styles.buttonAdd} onPress={btn}>
          <AntDesign name="pluscircle" size={24} color="white" />

        </TouchableOpacity>
      </View>


      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Tarefa data={item} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,

  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    margin: '5%',
    paddingStart: '5%',
    marginBottom: 12,

  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    marginBottom: 22,
    justifyContent: 'center',
  },
  input: {
    width: '75%',
    backgroundColor: 'white',
    height: 44,
    borderRadius: 7,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
