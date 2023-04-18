-- DDL (create table)
CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  stock INT DEFAULT 0 NOT NULL
);

CREATE TABLE customers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  address TEXT NOT NULL
);

CREATE TABLE transactions(
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL REFERENCES products (id),
  customer_id INT NOT NULL REFERENCES customers (id),
  qty INT NOT NULL
);

-- DML (insert, update, dll)
INSERT INTO products(name,description,stock)
VALUES('HP XIAOMI', 'description HP Xiaomi', 20);

INSERT INTO products(name,description,stock)
VALUES('HP SAMSUNG', 'description HP Samsung', 30);

INSERT INTO products(name,description,stock)
VALUES('HP REALME', 'description HP Realme', 40);

INSERT INTO customers(name,address)
VALUES('Joko', 'Sleman, Yogyakarta');

INSERT INTO customers(name,address)
VALUES('Budi', 'Karawang, Jawa Barat');

-- procedure creation
CREATE PROCEDURE transaction(customer_id INT, product_id INT, qty INT)
LANGUAGE plpgsql
AS $$
    BEGIN
        IF (SELECT CASE WHEN stock >= qty THEN true ELSE false END FROM products WHERE id = product_id) THEN
            UPDATE products
            SET stock = stock - qty WHERE id = product_id;
            INSERT INTO transactions(product_id, customer_id, qty)
            VALUES(product_id, customer_id, qty);
        END IF;
    END;
$$;

CREATE PROCEDURE restock(product_id INT, qty INT)
LANGUAGE plpgsql
AS $$
    BEGIN
        UPDATE products
        SET stock = stock + qty WHERE id = product_id;
    END;
$$;

-- call procedure
SELECT * FROM products;
CALL transaction(1, 1, 3);
SELECT * FROM products;
SELECT * FROM transactions;

SELECT * FROM products;
CALL restock(1, 5);
SELECT * FROM products;