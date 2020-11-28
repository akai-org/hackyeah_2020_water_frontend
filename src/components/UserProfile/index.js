import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./index.module.scss";// import Highcharts from "highcharts";
// import exporting from "highcharts/modules/exporting";
import { useAuth } from "../../context/AuthProvider";
import { getUserInfo } from "../../api";
import cn from "classnames";


function index() {
  const { user } = useAuth();

  const u = {
    avatar_url: "https://lh3.googleusercontent.com/a-/AOh14GiHxXLR1JzgShVH6SBSE0lXoZ-xPzuue7FwP9RJ=s96-c",
    first_name: "Tobiasz",
    level: 18,
  }

  useEffect(() => {
    // const stat
  }, []);

  console.log(user)
  return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <img className={classes.avatar} src={u.avatar_url}></img>
          <h2 className={classes.title}>Hello {u.first_name}!</h2>
        </div>
        <div className={classes.stats}>
          <div className={classes.chart}></div>
          <h3 className={classes.money}>
            Money Saved: 
            <span>200$</span> 
          </h3>
          <h3 className={classes.water}>
            Water Saved: 
            <span>7000L</span> 
          </h3>
          <h3 className={classes.time}>
            Avarage Time: 
            <span>15min</span> 
          </h3>
          <h2 className={classes.level}>
            Level
            <span>{u.level}</span> 
          </h2>
        </div>
        <div className={classes.buttons}>
          <div className={cn(classes.button, classes.shower)}>
            Add bath/shower
          </div>
          <div className={cn(classes.button, classes.habits)}>
            Check your habbits
          </div>
        </div>
      </div>
  );
}

export default index;
