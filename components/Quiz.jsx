import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Quiz = () => {
  const questionsAndAnswers = [
    {
      question: "Как зовут главного героя фильма 'The Matrix'?",
      answer: "Нео",
    },
    {
      question: "Какая столица Украины?",
      answer: "Киев",
    },
    {
      question: "Какое название столицы Франции?",
      answer: "Париж",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = async () => {
    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    const cleanedAnswer = answer.trim().toLowerCase();

    if (cleanedAnswer === currentQuestion.answer.toLowerCase()) {
      console.log("Правильный ответ!");
      const newScore = score + 1;
      setScore(newScore);
      await AsyncStorage.setItem("score", String(newScore));
    } else {
      console.log("Неправильный ответ!");
    }

    if (currentQuestionIndex < questionsAndAnswers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Вопросы закончились.");
    }
    setAnswer("");
  };

  useEffect(() => {
    loadScore();
  }, []);

  const loadScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem("score");
      if (savedScore === null) {
        setScore(0);
      } else {
        setScore(parseInt(savedScore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.quizContainer}>
      <Text style={styles.question}>
        {questionsAndAnswers[currentQuestionIndex].question}
      </Text>
      <TextInput
        style={styles.answerInput}
        placeholder="Введите ответ"
        value={answer}
        onChangeText={setAnswer}
      />
      <Text>Счет: {score}</Text>
      <Button title="Ответить" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    width: 300,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
  question: {
    textAlign: "center",
    fontSize: 20,
  },
  answerInput: {
    textAlign: "center",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default Quiz;
