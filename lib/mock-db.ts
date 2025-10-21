// lib/mock-db.ts
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';

type Meal = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

type Data = {
  meals: Meal[];
};

const file = path.join(process.cwd(), 'data', 'db.json');
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter, { meals: [] });

export async function getDb() {
  await db.read();
  return db;
}
