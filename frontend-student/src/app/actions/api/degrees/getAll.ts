'use server';

import axios from 'axios';
import { DegreeMinimalDTO } from '@/app/models/internships.model';

export async function getAllDegrees(): Promise<
  DegreeMinimalDTO[]
> {

const apiUrl = process.env.API_URL;
const res = await axios.get<DegreeMinimalDTO[]>(
    `${apiUrl}/degrees/`
);
  return res.data;
}
