import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = ({navigation}) => {

  const [name, setName] = useState("");

  const handleClick =()=>{
    if(!name){
        Alert.alert('please fill name')
    }
    else{
        navigation.navigate('VideoCall',{name:name})
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
      value={name}
      onChangeText={(text)=>setName(text)}
        placeholder="enter name"
        style={{
          padding: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "red",
          width: "80%",
          margin: 10,
        }}
      />
      <TouchableOpacity
      onPress={handleClick}
       style={{ backgroundColor: "skyblue", padding: 10 }}>
        <Text>Video Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
