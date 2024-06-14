import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { EventType } from '@/utils/types';
import { toast } from '@/components/ui/use-toast';

export const usePostEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createEvent'],
    mutationFn: async (variables: Partial<EventType>) => {
      const { data } = await axios.post('/events', variables);
      return data as EventType;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      toast({
        title: 'Event created!',
      });
    },
  });
};
