import React, { useEffect, useState } from "react";
import SEO from "../../seo";
import { getQuestions } from "../../api";
import BeatLoader from "react-spinners/BeatLoader";
import classes from "./index.module.scss";
import cn from "classnames";

const hardCodedResponse = [
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
  {
    id: 1,
    name: "Did you take a shower or a bath?",
    image1_url:
      "https://www.flaticon.com/svg/static/icons/svg/2425/2425854.svg",
    image2_url:
      "https://www.flaticon.com/svg/static/icons/svg/3030/3030330.svg",
  },
];

export default function Home() {
  const [questions, setQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = hardCodedResponse; //await getQuestions();
        setQuestions(response);
        setCurrentQuestion(response[0]);
      } catch (err) {
        console.log(err);
        window.setAlert("error", "Nie udało się pobrać pytań");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <>
      <SEO title="Achievements" />
      <div className={classes.wrapper}>
        <div className={classes.card}>
          {isLoading ? (
            <BeatLoader size={20} color={"#007ff4"} />
          ) : (
            questions.length ? (
              <>
                <h3 className={classes.question}>{currentQuestion.name}</h3>
                <div className={classes.answers}>
                  <div className={cn(classes.answer, classes.left)}>
                    <img
                      className={classes.icon}
                      src={currentQuestion.image1_url}
                    />
                  </div>
                  <div className={cn(classes.answer, classes.right)}>
                    <img
                      className={classes.icon}
                      src={currentQuestion.image2_url}
                    />
                  </div>
                </div>
              </>
            ) : "No question found :("
          )}
        </div>
      </div>
    </>
  );
}
