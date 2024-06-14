import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const EventsLoadingGrid = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from(Array(10).keys()).map((key) => (
        <div className="col-span-1" key={key}>
          <CardHeader>
            <CardTitle>
              <Skeleton className="w-3/4 h-[20px] rounded-full" />
            </CardTitle>
            <Skeleton className="w-1/2 h-[20px] rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="w-1/4 h-[20px] rounded-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="w-1/4 h-[20px] rounded-full" />
          </CardFooter>
        </div>
      ))}
    </ul>
  );
};
