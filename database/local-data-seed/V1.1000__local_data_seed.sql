-- Password12345
INSERT INTO public.users (id, email, name, hashedPassword) VALUES (1, 'eli@test.com', 'eli', '$2y$10$vx4rYJzjWvZWSaDbDjlpLeBm1aFpJOp8jfff0KLm93VmgPCMR3C8q');

INSERT INTO public.events (id, user_id, name) VALUES (1, 1, 'Seeded event');

INSERT INTO public.tickets (id, user_id, event_id, customer_email, created_at) VALUES (1, 1, 1, 'customer@test.com', CURRENT_TIMESTAMP);