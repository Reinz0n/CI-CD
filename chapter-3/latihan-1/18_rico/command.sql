CREATE DATABASE binar_shop;

CREATE Table
    products (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        stock INTEGER NOT NULL
    );

CREATE Table
    customers (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address TEXT NOT NULL
    );

CREATE Table
    transaction (
        id BIGSERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL,
        customer_id INTEGER NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (customer_id) REFERENCES customers(id),
        qty INTEGER NOT NULL
    );

CREATE OR REPLACE PROCEDURE TRANSACTION(CUSTOMER_ID 
INTEGER, PRODUCT_ID INTEGER, QTY INTEGER) LANGUAGE 
PLPGSQL AS 
	$$ DECLARE stock_product INT;
	BEGIN -- get stcok info
	SELECT
	    stock INTO stock_product
	from products
	WHERE id = PRODUCT_ID;
	IF QTY >= 1
	AND stock_product >= QTY THEN -- add data transaction
	INSERT INTO
	    transaction(product_id, customer_id, qty)
	VALUES (PRODUCT_ID, CUSTOMER_ID, QTY);
	-- update product
	UPDATE products SET stock = stock - QTY WHERE id = PRODUCT_ID;
	ELSE RAISE EXCEPTION 'cannot proceed invalid qty or not enough stock';
	END IF;
END; 

$$;

CREATE OR REPLACE PROCEDURE RESTOCK(PRODUCT_ID INTEGER
, QTY INTEGER) LANGUAGE PLPGSQL AS 
	$$ BEGIN IF QTY >= 1 THEN -- update product
	UPDATE products
	SET stock = stock + QTY
	WHERE id = PRODUCT_ID;
	ELSE RAISE EXCEPTION 'cannot proceed invalid qty';
	END IF;
END; 

$$;