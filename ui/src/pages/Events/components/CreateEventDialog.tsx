import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { CreateEventForm } from './CreateEventForm';

export const CreateEventDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>Create a new Event</DialogDescription>
        </DialogHeader>
        <CreateEventForm />
      </DialogContent>
    </Dialog>
  );
};
