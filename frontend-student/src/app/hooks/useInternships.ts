'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getAllInternships } from '@/app/actions/api/internships/getAll';
import { getInternshipByIdAction } from '@/app/actions/api/internships/getOne';
//import { createRequestInternshipAction } from '../actions/api/internships/create';

import type {
  InternshipResponseDTO,
  InternshipCreationDTO,
} from '@/app/models/internships.model';

// 1) LIST QUERY
export function useInternshipsQuery(initialData?: InternshipResponseDTO[]) {
  return useQuery({
    queryKey: ['internships'],
    queryFn: getAllInternships,
    initialData,
    refetchOnWindowFocus: false,
  });
}


// 2) DETAIL QUERY
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

/*// 3) MUTATIONS
export function useInternshipMutations() {
  const qc = useQueryClient();

  const createRequestInternship = useMutation({
    mutationKey: ['createInternship'],
    mutationFn: (data: InternshipCreationDTO) => createInternshipAction(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['internships'] });
    },
    retry: 3,
  });

  return {
    //createRequestInternship,
  };
}*/