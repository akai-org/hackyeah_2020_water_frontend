import React, { useEffect, useState } from "react";
import SEO from "../../seo";
import { getQuestions, sendQuestions } from "../../api";
import BeatLoader from "react-spinners/BeatLoader";
import classes from "./index.module.scss";
import cn from "classnames";
import Link from "next/link";
const hardCodedResponse = [
  {
    id: 1,
    name: "Did you take a shower or a bath?",
    image1_url:
      "https://www.flaticon.com/svg/static/icons/svg/2425/2425854.svg",
    image2_url:
      "https://www.flaticon.com/svg/static/icons/svg/3030/3030330.svg",
  },
  {
    id: 2,
    name: "Did you use dishwasher or wash the dishes?",
    image1_url:
      "https://www.flaticon.com/svg/static/icons/svg/1581/1581375.svg",
    image2_url: "https://www.flaticon.com/svg/static/icons/svg/578/578048.svg",
  },
  {
    id: 3,
    name: "Did you turn off the tap during tooth brushing?",
    image1_url: "https://www.flaticon.com/svg/static/icons/svg/86/86315.svg",
    image2_url:
      "https://www.flaticon.com/svg/static/icons/svg/3778/3778322.svg",
  },
];

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  useEffect(() => {
    (async () => {
      try {
        // const response = await getQuestions();
        const response = hardCodedResponse; //await getQuestions();
        setQuestions(response);
      } catch (err) {
        console.log(err);
        window.setAlert("error", "Not questions found");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(answers);
    (async () => {
      if (questions.length !== 0 && currentQuestion === questions.length) {
        try {
          await sendQuestions(answers);
        } catch (e) {
          window.setAlert(
            "error",
            "Nie udało się zapisać twoich odpowiedzi w bazie, spróbuj ponownie."
          );
        }
      }
    })();
  }, [currentQuestion]);

  const handleNextQuestion = (answer) => () => {
    setAnswers((v) => {
      v[`answer_${currentQuestion+1}`] = answer;
      return v;
    });
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <SEO title="Achievements" />
      <div className={classes.wrapper}>
        <div className={classes.card}>
          {isLoading ? (
            <BeatLoader size={20} color={"#007ff4"} />
          ) : questions.length ? (
            currentQuestion < questions.length ? (
              <>
                <h3 className={classes.question}>
                  {questions[currentQuestion].name}
                </h3>
                <div className={classes.answers}>
                  <div className={cn(classes.answer, classes.left)}>
                    <img
                      onClick={handleNextQuestion(1)}
                      className={classes.icon}
                      src={questions[currentQuestion].image1_url}
                    />
                  </div>
                  <div className={cn(classes.answer, classes.right)}>
                    <img
                      onClick={handleNextQuestion(2)}
                      className={classes.icon}
                      src={questions[currentQuestion].image2_url}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                That's all for today
                <br />
                <Link href="/">
                  <a>Wróć na stronę główną</a>
                </Link>
              </>
            )
          ) : (
            "No questions :("
          )}
        </div>
      </div>
    </>
  );
}
