import { StyleSheet, Text, View, FlatList } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questions from "../data/questions.json";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
      />

      {/* <QuestionListItem question={questions.items[0]} />
      <QuestionListItem question={questions.items[1]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
