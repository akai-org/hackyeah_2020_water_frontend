import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import { RiMenu4Fill } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import { FaHome, FaUserCog, FaChartBar } from "react-icons/fa";
import classes from "./index.module.scss";
import { getProfile } from "../../api";
import Link from "next/link";
import cn from "classnames";
const list = [
  [<FaHome />, "Home", "/"],
  [<FaUserCog />, "Profile", "/profile"],
  [<FaChartBar />, "Achievements", "/achievements"],
  [<GiExitDoor />, "Logout", "/logout"],
];
function Menu() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    //getProfile().then(console.log);
    setOpen(!open);
  };
  return (
    <>
      <div className={classes.button}>
        <Fab color="primary" onClick={handleClick}>
          <RiMenu4Fill fontSize={25} />
        </Fab>
      </div>
      <nav className={cn(classes.nav, open && classes.open)}>
        {list.map(([icon, name, url]) => (
          <Link href={url} key={name} onClick={handleClick}>
            <a>
              {icon} {name}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Menu;
