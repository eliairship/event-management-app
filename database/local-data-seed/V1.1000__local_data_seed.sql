-- Password12345
INSERT INTO public.users (identifier, name, password) VALUES ('eli@test.com', 'eli', '$2y$10$vx4rYJzjWvZWSaDbDjlpLeBm1aFpJOp8jfff0KLm93VmgPCMR3C8q');

INSERT INTO public.events (user_id, name) VALUES (1, 'Seeded event');

INSERT INTO public.tickets (user_id, event_id, customer_email, created_at) VALUES (1, 1, 'customer@test.com', CURRENT_TIMESTAMP);