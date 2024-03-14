ALTER TABLE public.users
ADD COLUMN deleted_at TIMESTAMP;

ALTER TABLE public.events
ADD COLUMN deleted_at TIMESTAMP;

ALTER TABLE public.tickets
ADD COLUMN deleted_at TIMESTAMP;