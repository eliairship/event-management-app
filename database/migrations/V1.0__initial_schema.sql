CREATE TYPE event_status AS ENUM ('ACTIVE', 'INACTIVE', 'CANCELED', 'COMPLETED');
CREATE TYPE ticket_status AS ENUM ('VOIDED', 'PENDING', 'CANCELED');

CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    identifier VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    title VARCHAR(255),
    address VARCHAR(255),
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.events (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES public.users(id),
    name VARCHAR(255),
    date TIMESTAMP,
    description TEXT,
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    status event_status,
    created_at TIMESTAMP,
    completed_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.tickets (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES public.users(id),
    event_id INT REFERENCES public.events(id),
    customer_email VARCHAR(255) NOT NULL,
    quantity INT,
    status ticket_status,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);
