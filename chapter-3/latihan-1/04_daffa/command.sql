CREATE DATABASE toko_roti;
CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    stock INTEGER not null
);

CREATE TABLE customers (
    id BIGSERIAL PRIMARY KEY,
    name varchar(225) not null,
    address text not null
);

CREATE TABLE transaction (
    id BIGSERIAL PRIMARY KEY,
    product_id BIGINT NOT NULL,
    customer_id BIGINT NOT NULL,
    qty integer not null
);

INSERT INTO products (name, description, stock) VALUES ('roti buaya' , 'ini merupakan roti buaya', 10);
INSERT INTO products (name, description, stock) VALUES ('roti kismis' , 'ini merupakan roti kismis', 10);

INSERT INTO customers (name, address) VALUES ('Adi', 'Malang');
INSERT INTO customers (name, address) VALUES ('Surya', 'Surabaya');

CREATE PROCEDURE transaction(id_customer int, id_product int, qty int)
language plpgsql
as $$
BEGIN
INSERT INTO transaction (product_id, customer_id, qty) VALUES (id_product, id_customer, qty);
UPDATE products set stock = stock - qty WHERE id = id_product;
commit;
end;$$;

CREATE PROCEDURE restock (id_product int, qty int)
language plpgsql
as $$
BEGIN
UPDATE products set stock = stock + qty WHERE id = id_product;
commit;
end;$$;

CALL transaction(1, 1, 2);
SELECT * FROM products;
SELECT * FROM transaction;

CALL restock(1, 5);
SELECT * FROM products;