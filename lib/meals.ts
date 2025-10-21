import { Meal } from '@/types/type';
import { getDb } from './mock-db';

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const db = await getDb();

  // throw new Error('Loading meals failed');
  return db.data.meals;
}

export async function getMeal(slug: string): Promise<Meal> {
  const db = await getDb();
  const meal = db.data.meals.find((item) => item.slug === slug);
  return meal!;
}
