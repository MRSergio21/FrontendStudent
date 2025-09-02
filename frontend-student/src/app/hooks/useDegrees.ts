'use client';

import { useQuery } from '@tanstack/react-query';
import type { DegreeResponseDTO } from '@/app/models/internships.model';
import { getAllDegrees } from '../actions/api/degrees/getAll';

export function useDegreesQuery(initialData?: DegreeResponseDTO[]) {
  return useQuery({
    queryKey: ['degrees'],
    queryFn: getAllDegrees,
    initialData,
    refetchOnWindowFocus: false,
  });
}