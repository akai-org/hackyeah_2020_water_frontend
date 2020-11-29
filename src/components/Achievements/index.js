import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";
import { getAchievements } from "../../api";
import classes from "./index.module.scss";
import { GiTrophyCup } from "react-icons/gi";
const colors = ["rgb(144, 81, 22)", "rgb(154, 154, 154)", "rgb(252, 255, 55)"];
export default function Home() {
  const [aList, setAList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setAList([
    //   {
    //     collected_at: null,
    //     description: "Korzystaj z prysznicu 7 dni pod rząd",
    //     exp_value: 100,
    //     id: 1,
    //     image_url:
    //       "https://www.flaticon.com/svg/static/icons/svg/2425/2425854.svg",
    //     name: "Fan prysznica",
    //     level:1
    //   },
    // ]);
    (async () => {
      try {
        const response = await getAchievements();
        setAList(response);
      } catch (err) {
        console.log(err);
        window.setAlert("error", "Nie udało się pobrać achievementów");
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className={classes.box}>
      {loading
        ? Array(6)
            .fill()
            .map((v, i) => (
              <div className={classes.skeleton} key={i}>
                <Skeleton variant="rect" width={400} height={300} />
              </div>
            ))
        : aList.length
        ? aList.map(
            ({ description, id, image_url, name, level, exp_value }) => {
              const currentValue = Math.random();
              return (
                <div
                  className={classes.mini}
                  key={id}
                  style={{ borderColor: colors[level - 1] }}
                >
                  {/* <img src={image_url} /> */}
                  <div className={classes.text}>
                    <div>{name}</div>
                    <LinearProgress
                      variant="determinate"
                      value={currentValue * 100}
                    />
                    <span>{`${Math.round(
                      currentValue * exp_value
                    )}/${exp_value}`}</span>
                    <div>{description}</div>
                  </div>
                  <div className={classes.trophy}>
                    <GiTrophyCup fontSize={70} color={colors[level - 1]} />
                  </div>
                </div>
              );
            }
          )
        : "Brak aczwimentów"}
    </div>
  );
}
/*collected_at: null
description: "Korzystaj z prysznicu 7 dni pod rząd"
exp_value: 100
id: 1
image_url: "https://www.flaticon.com/svg/static/icons/svg/2425/2425854.svg"
name: "Fan prysznica"
__proto__: Object
1:
collected_at: null
description: "Zmywarka z obrazkiem prysznica"
exp_value: 200
id: 2
image_url: "https://www.flaticon.com/svg/static/icons/svg/2425/2425854.svg"
name: "Zmywarka"*/
