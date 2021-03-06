import React, { useEffect, useState } from "react";
import cn from "classnames";
import classes from "./index.module.scss";
import { useAuth } from "../context/AuthProvider";
import { getProfile } from "../api";
import { useRouter } from "next/router";
import Link from "next/link";
// loading indicator
import BeatLoader from "react-spinners/BeatLoader";

function index() {
  const { user } = useAuth();
  const router = useRouter();

  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getProfile();
        setStats(response);
      } catch (err) {
        console.log(err);
        window.setAlert("error", "Nie udało się pobrać danych o użytkowniku");
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  const countLevel = () => `${(stats.gained_exp % 1000) + 1} `;

  const countMoney = () => `${(stats.saved_water * 0.000397).toFixed(2)} PLN`;

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <img className={classes.avatar} src={user.avatar_url}></img>
        <h2>Hello {user.first_name}!</h2>
      </div>
      <div className={classes.stats}>
        {isLoading ? (
          <BeatLoader size={20} color={"#007ff4"} />
        ) : stats ? (
          <>
            <h3 className={classes.money}>
              Money Saved:
              <span>{countMoney()}</span>
            </h3>
            <h3 className={classes.water}>
              Water Saved:
              <span>{stats.saved_water} L</span>
            </h3>
            <h2 className={classes.level}>
              Level
              <span>{countLevel()}</span>
            </h2>
          </>
        ) : (
          "No data found"
        )}
      </div>
      <div className={classes.buttons}>
        <Link href="/achievements">
          <a className={cn(classes.button, classes.shower)}>{`>`} Achivments</a>
        </Link>
        <Link href="/questions">
          <a className={cn(classes.button, classes.habits)}>
            {`>`} Run daily quiz
          </a>
        </Link>
      </div>
    </div>
  );
}

export default index;
