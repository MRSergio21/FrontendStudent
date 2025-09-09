'use client';

import { useQuery } from '@tanstack/react-query';

import { getAllInternships } from '@/app/actions/api/internships/getAll';
import { getInternshipByIdAction } from '@/app/actions/api/internships/getOne';

import type {
  InternshipResponseDTO,
  InternshipCreationDTO,
} from '@/app/models/internships.model';

export function useInternshipsQuery(initialData?: InternshipResponseDTO[]) {
  return useQuery({
    queryKey: ['internships'],
    queryFn: getAllInternships,
    initialData,
    refetchOnWindowFocus: false,
  });
}

export function useInternshipQuery(internshipId?: string) {
  return useQuery({
    queryKey: ['internship', internshipId],
    queryFn: () => {
      if (!internshipId) throw new Error('Missing internship ID');
      return getInternshipByIdAction(internshipId);
    },
    enabled: Boolean(internshipId),
    refetchOnWindowFocus: false,
  });
}