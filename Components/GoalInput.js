import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAdd(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandeler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer} >
          <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
          <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  );
};
/**bind() used to reconfigure some arguments wich  should eventually be passed
 * along when the function gets executed
 */

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "grey",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%'
  },
  button:{
    width:'40%'
  }
});
export default GoalInput;
