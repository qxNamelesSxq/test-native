import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Quiz = () => {
  const questionsAndAnswers = [
    {
      question: "Как зовут главного героя фильма 'The Matrix'?",
      answers: ["Нео", "Морфеус", "Смит"],
      correctIndex: 0, // Индекс правильного ответа
    },
    {
      question: "Какая столица Украины?",
      answers: ["Москва", "Берлин", "Киев"],
      correctIndex: 2,
    },
    {
      question: "Какое название столицы Франции?",
      answers: ["Лондон", "Мадрид", "Париж"],
      correctIndex: 2,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleSubmit = async () => {
    if (
      selectedAnswer === questionsAndAnswers[currentQuestionIndex].correctIndex
    ) {
      console.log("Правильный ответ!");
      const newScore = score + 1;
      setScore(newScore);
      await AsyncStorage.setItem("score", String(newScore));
    } else {
      console.log("Неправильный ответ!");
    }

    if (currentQuestionIndex < questionsAndAnswers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      console.log("Вопросы закончились.");
    }
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
      {quizCompleted ? (
        <>
          <Text style={styles.question}>Вопросы закончились!</Text>
          <Text style={{ textAlign: "center" }}>Ваш счет: {score}</Text>
          <Button title="Начать заново" onPress={resetQuiz} />
        </>
      ) : (
        <>
          <Text style={styles.question}>
            {questionsAndAnswers[currentQuestionIndex].question}
          </Text>
          {questionsAndAnswers[currentQuestionIndex].answers.map(
            (answer, index) => (
              <Button
                key={index}
                title={answer}
                onPress={() => setSelectedAnswer(index)}
                disabled={selectedAnswer !== null}
                color={selectedAnswer === index ? "green" : "blue"}
              />
            )
          )}
          <Text>
            Выбран ответ:{" "}
            {selectedAnswer !== null
              ? questionsAndAnswers[currentQuestionIndex].answers[
                  selectedAnswer
                ]
              : "Нет выбора"}
          </Text>
          <Text>Счет: {score}</Text>
          <Button
            title="Ответить"
            onPress={handleSubmit}
            disabled={selectedAnswer === null}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
  quizResult: {
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
  },
});

export default Quiz;
