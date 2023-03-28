CREATE TABLE products (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        stock INT NOT NULL
    );

CREATE TABLE customers (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        address TEXT NOT NULL
    );

CREATE TABLE transaction (
        id BIGSERIAL PRIMARY KEY,
        product_id INT NOT NULL,
        customer_id INT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        qty INT NOT NULL
    );

INSERT INTO products (name, description, stock) 
    VALUES ('Nasi Goreng', 'Nasi Goreng Original', 20),
           ('Mie Ayam', 'Mie Ayam Original', 20),
           ('Bakso', 'Bakso Ayam Original', 20);

INSERT INTO customers (name, address)
    VALUES ('Ferdie', 'Pekanbaru'),
           ('Amat', 'Dumai');

CREATE OR REPLACE PROCEDURE TRANSACTION(CUSTOMER_ID INT, PRODUCT_ID INT, QTY INT) 
LANGUAGE PLPGSQL AS $$ DECLARE stock_product INT;
	BEGIN
	SELECT stock INTO stock_product from products WHERE id = PRODUCT_ID;
	IF QTY >= 1 AND stock_product >= QTY THEN
	INSERT INTO transaction(product_id, customer_id, qty) VALUES (PRODUCT_ID, CUSTOMER_ID, QTY);
	UPDATE products SET stock = stock - QTY WHERE id = PRODUCT_ID;
	ELSE RAISE EXCEPTION 'Tidak Dapat Memenuhi Transanksi Karena Jumlah Stock';
	END IF;
END;$$;

CREATE OR REPLACE PROCEDURE RESTOCK(PRODUCT_ID INT, QTY INT) 
LANGUAGE PLPGSQL AS $$ 
    BEGIN
	UPDATE products SET stock = stock + QTY WHERE id = PRODUCT_ID;
END;$$;

CALL TRANSACTION(1, 1, 10);
CALL RESTOCK(1, 5);