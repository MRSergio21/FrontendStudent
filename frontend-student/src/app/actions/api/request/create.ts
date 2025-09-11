'use server';

import axios from 'axios';
import { RequestResponseDTO, RequestCreationDTO } from '../../../models/request.model';

export async function createRequestAction(
    data: RequestCreationDTO,
): Promise<RequestResponseDTO> {
    const apiUrl = process.env.API_URL;
    console.log('Creating request for internship with data:', data);
    const res = await axios.post<RequestResponseDTO>(
        `${apiUrl}/requests/`,
        data
    );

    return res.data;
}
