import { EventsGrid } from '../components/EventsGrid';
import { Suspense } from 'react';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { EventsLoadingGrid } from '../components/EventsLoadingGrid';
import { CreateEventDialog } from '../components/CreateEventDialog';

export const EventsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="py-4">
          <CardTitle>Events</CardTitle>
          <CardDescription>
            All of your past and upcoming events
          </CardDescription>
        </div>
        <CreateEventDialog />
      </div>
      <Suspense fallback={<EventsLoadingGrid />}>
        <EventsGrid />
      </Suspense>
    </div>
  );
};
