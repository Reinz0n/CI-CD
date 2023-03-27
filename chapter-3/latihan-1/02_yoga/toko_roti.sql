CREATE TABLE customers (
    id bigserial NOT NULL,
    name varchar(30) NOT NULL,
    address text NOT NULL
);

CREATE TABLE products (
    id bigserial NOT NULL,
    name varchar(50) NOT NULL,
    description text NOT NULL,
    stock integer NOT NULL
);

CREATE TABLE transactions (
    id bigserial NOT NULL,
    product_id integer NOT NULL,
    customer_id integer NOT NULL,
    qty integer NOT NULL
);

INSERT INTO customers (name, address) VALUES ('Johan', 'Malang');
INSERT INTO customers (name, address) VALUES ('Bagas', 'Surabaya');
INSERT INTO products (name, description, stock) VALUES ('Roti Selai Nanas', 'Ini Roti Rasa Nanas', 20);
INSERT INTO products (name, description, stock) VALUES ('Roti Selai Anggur', 'Ini Roti Rasa Anggur', 15);
INSERT INTO products (name, description, stock) VALUES ('Roti Selai Strawberry', 'Ini Roti Rasa Strawberry', 25);

CREATE PROCEDURE transaction(
    customer_id integer, 
    product_id integer, 
    qty integer
)
LANGUAGE plpgsql
AS $$
BEGIN
INSERT INTO transactions (product_id, customer_id, qty) VALUES (product_id, customer_id, qty);
UPDATE products SET stock = stock - qty WHERE id = product_id;
COMMIT;
END;$$;

CREATE PROCEDURE restock(
    product_id integer, 
    qty integer
);
LANGUAGE plpgsql
AS $$
BEGIN
UPDATE products SET stock = stock + qty WHERE id = product_id;
COMMIT;
END;$$;

CALL transaction (1, 2, 3);
CALL transaction (2, 1, 5);
CALL restock (2, 15);