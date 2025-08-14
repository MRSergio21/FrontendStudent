'use server';

import axios from 'axios';
import { InternshipResponseDTO } from '@/app/models/internships.model';

export async function getAllInternships(): Promise<
  InternshipResponseDTO[]
> {

const apiUrl = process.env.apiUrl;
const res = await axios.get<InternshipResponseDTO[]>(
    `${apiUrl}/internships/`
);
  return res.data;
}
