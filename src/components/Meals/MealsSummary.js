import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delecious Food, Deleivered To you</h2>
      <p>
        Choose your favorite meals from our broad selection of available meals
        and enjoys a delecious lunch our dinner at home
      </p>
      <p>
        All our meals are coocked with high-quality ingredient, just-in-time and
        of course by experienced chefs
      </p>
    </section>
  );
};

export default MealsSummary;
