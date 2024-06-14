import { useSuspenseQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { EventType } from '@/utils/types';

export const useEvents = () => {
  return useSuspenseQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data } = await axios.get('/events');
      return data as EventType[];
    },
  });
};
