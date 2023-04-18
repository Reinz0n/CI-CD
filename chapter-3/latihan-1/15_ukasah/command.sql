-- DDL CREATE TABLE

CREATE TABLE products (
id bigserial primary key,
name varchar(25) not null,
description text not null,
stock integer not null
);

CREATE TABLE customers (
id bigserial primary key,
customer_name varchar(25) not null,
address text not null
);

CREATE TABLE transaction (
id bigserial primary key,
product_id integer not null,
customer_id integer not null,
qty integer not null
);

List of relations
 Schema |    Name     | Type  |  Owner
--------+-------------+-------+----------
 public | akun        | table | postgres
 public | articles    | table | postgres
 public | customers   | table | postgres
 public | products    | table | postgres
 public | transaction | table | postgres
(5 rows)


-- DML INSERT UPDATE
insert into products (name, description, stock) values ('Buku', 'Buku Bacaan', 10);

select * from products;

 id | name | description | stock
----+------+-------------+-------
  1 | Buku | Buku Bacaan |    10
(1 row)

insert into customers (customer_name, address) values ('Ali', 'Jl Puri No.7');

select * from customers;

 id | customer_name |   address
----+---------------+--------------
  1 | Ali           | Jl Puri No.7
(1 row)

select * from transaction;

 id | product_id | customer_id | qty
----+------------+-------------+-----
  1 |          1 |           1 |   5
(1 row)


-- Prosedur
create procedure transaction (product_id int, customer_id int, qty int)
language plpgsql
as $$
begin
update products set stock = stock - qty where id = product_id;
insert into transaction(product_id, customer_id, qty) values(product_id, customer_id, qty);
commit;
end;$$;
CREATE PROCEDURE

create procedure restock (product_id int, qty int)
language plpgsql
as $$
begin
update products set stock = stock + qty where id = product_id;
commit;
end;$$;
CREATE PROCEDURE


-- CALL Prosedur Transaction
call transaction (1, 1, 5);
CALL
blog_binar=# select * from products
blog_binar-# ;
 id | name | description | stock
----+------+-------------+-------
  1 | Buku | Buku Bacaan |    15
(1 row)

-- CALL Prosedur Restock
call restock(1,10);
CALL
blog_binar=# select * from products
blog_binar-# ;
 id | name | description | stock
----+------+-------------+-------
  1 | Buku | Buku Bacaan |    20
(1 row)

