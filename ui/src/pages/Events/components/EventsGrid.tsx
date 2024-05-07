import { useEvents } from '../api/useEvents';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EventsLoadingGrid } from './EventsLoadingGrid';

export const EventsGrid = () => {
  const { data: events, isLoading, isFetching } = useEvents();

  if (isLoading || isFetching) {
    return <EventsLoadingGrid />;
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {events?.length
        ? events.map((event) => (
            <Card key={event.id} className="col-span-1">
              <CardHeader>
                <CardTitle>{event.name}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))
        : null}
    </ul>
  );
};
