import React, {useState} from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
const GoalInput = (props) => {
    
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandeler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.onAdd.bind(this,enteredGoal)} />
    </View>
  );
};
/**bind() used to reconfigure some arguments wich  should eventually be passed 
 * along when the function gets executed
 */

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "grey",
    borderBottomWidth: 1,
  },
});
export default GoalInput;
