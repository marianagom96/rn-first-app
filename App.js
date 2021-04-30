import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";
/*FlayList handle infinite lists
it has two important properties
1. data (inputed) can be an array
2- RenderItem takes a function that is called for every item in the data to render a list item without manual maping*/

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoal = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]); //List of objects not just a list
    /*setCourseGoals([...courseGoals,enteredGoal]); 
  spread operator js feature takes existing array and pulls out all the
   elements and adds them to a new array, add a coma to add a new extra element*/
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoalAdd = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAdd={addGoal} onCancel={cancelGoalAdd} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
