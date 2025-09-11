'use client';

import { createRequestAction } from '../actions/api/request/create';
import { RequestCreationDTO, RequestResponseDTO } from '../models/request.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useRequestMutations() {
  const qc = useQueryClient();

  const createRequest = useMutation({
    mutationFn: (data: RequestCreationDTO) => createRequestAction(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['requests'] });
    },
    onError: error => {
      console.error('Error creating degree:', error);
    },
    retry: 3,
  });

  return { createRequest };
}