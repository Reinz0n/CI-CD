CREATE DATABASE toko_roti;

CREATE TABLE products (
id BIGSERIAL NOT NULL PRIMARY KEY,
name CHAR(50) NOT NULL,
description CHAR(200) NOT NULL,
stock INT NOT NULL
);

CREATE TABLE customers (
id BIGSERIAL NOT NULL PRIMARY KEY,
name CHAR(50) NOT NULL,
address CHAR(200) NOT NULL
);

CREATE TABLE transaction (
id BIGSERIAL NOT NULL PRIMARY KEY,
product_id INT NOT NULL REFERENCES products(id),
customer_id INT NOT NULL REFERENCES customers(id),
quantity INT NOT NULL
);

CREATE PROCEDURE transaction(customer_id int, product_id int, quantity int)
language plpgsql
as $$
begin
INSERT INTO transaction (product_id, customer_id, quantity) VALUES (product_id, customer_id, quantity);
UPDATE products SET stock = stock - 1 WHERE id = product_id;
COMMIT;
END;$$;

CREATE PROCEDURE restock(product_id int, quantity int)
language plpgsql
as $$
begin
UPDATE products SET stock = stock + quantity WHERE id = product_id;
COMMIT;
END;$$;

INSERT INTO customers (id, name, address) VALUES (1, 'fitri', 'banyuwangi');
INSERT INTO customers (id, name, address) VALUES (2, 'fifi', 'banyuwangi');

INSERT INTO products (id, name, description, stock) VALUES (1, 'oreo', 'makanan ringan', 10);
INSERT INTO products (id, name, description, stock) VALUES (2, 'wafer', 'makanan ringan', 10);

CALL transaction (1, 1, 1);
select * from transaction;

call restock(2, 10);
select * from products;