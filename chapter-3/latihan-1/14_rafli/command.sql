CREATE TABLE products(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(100),
  stock INT
);

CREATE TABLE customers(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address TEXT
);

CREATE TABLE transcation(
  id BIGSERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  customer_id INT NOT NULL,
  qty INT NOT NULL
);

INSERT INTO products (name, description, stock) VALUES
  ('gula', 'ini gula', 100),
  ('ikan', 'ini ikan', 100);

INSERT INTO customers (name, address) VALUES
  ('rafli', 'jl. sehat no.1'),
  ('lutfi', 'jl. baik no.1');

CREATE PROCEDURE transaksi(id_customer INT, id_product INT, jumlah INT)
  LANGUAGE plpgsql
  AS $$
  BEGIN
    -- kurangi stock
    UPDATE products SET stock = stock - jumlah WHERE id = id_product;
    
    -- buat transaksi baru
    INSERT INTO transaction (product_id, customer_id, qty) VALUES (id_product, id_customer, jumlah);
  COMMIT;
END;$$;

CREATE PROCEDURE restock(id_product INT, jumlah INT)
  LANGUAGE plpgsql
  AS $$
  BEGIN
    -- tambahi stock
    UPDATE products SET stock = stock + jumlah WHERE id = id_product;
  COMMIT;
END;$$;

CALL transaksi(1,1,2);
CALL restock(1,20);

