import MealItem from "./meal-item";
import type { Meal } from "@/types/type";
import classes from "./meals-grid.module.css";

type MealsGridProps = {
  mealItems: Meal[];
};
export default function MealsGrid({ mealItems }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {mealItems.map((meal) => (
        <li key={meal.title}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
