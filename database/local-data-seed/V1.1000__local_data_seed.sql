-- Password12345
INSERT INTO public.users (identifier, name, password) VALUES ('eli@test.com', 'eli', '$2a$10$VXeNlVNo0K4keoyy6su12.yJae1RPvhytIUDBjq4nMcyN10oP.p/i');

INSERT INTO public.events (user_id, name) VALUES (1, 'Seeded event');

INSERT INTO public.tickets (user_id, event_id, customer_email, created_at) VALUES (1, 1, 'customer@test.com', CURRENT_TIMESTAMP);