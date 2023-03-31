1. Data Definition Langauage (DDL)
2. Data Manipulation Langauage (DML)
3. Stored Procedure
   Example :

   ```sql
   CREATE OR REPLACE PROCEDURE transaction(
   customer_id INT, product_id INT, qty INT
   ) LANGUAGE plpgsql AS $$ DECLARE stock_product INT;
   BEGIN
    SELECT
      stock INTO stock_product
    FROM
      products
    WHERE
      id = product_id;

    IF qty >= 1 AND stock_product >= qty THEN
        INSERT INTO
        transactions (product_id, customer_id, qty)
        VALUES (product_id, customer_id, qty);

        UPDATE
          products
        SET
          stock = stock - qty
        WHERE
          id = product_id;

    ELSE
        RAISE EXCEPTION 'error stock or qty';
    END IF;
   END;
   $$;
   ```

4. Join Query
   Example :

   ```sql
   -- mencari jumlah like sebuah video
   select
    channels.name as nama_channel,
    videos.title as judul_video,
    videos.description as deskripsi_video,
    count(*) as jumlah_like
   from
    videos
    join channels on channels.id = videos.channel_id
    join likes on likes.video_id = videos.id
   group by
    videos.id,
    channels.name,
    videos.title,
    videos.description
   order by
    videos.id;
   ```

   ```sql
   -- mencari jumlah subcribers sebuah channel
   select
   channels.name as nama_channel,
   users.name as pemilik_channel,
   count(\*) as jumlah_subscribers
   from
   channels
   join users on users.id = channels.user_id
   join channel_subscribers on channel_subscribers.channel_id = channels.id
   group by
   channels.id, channels.name, users.name
   order by
   channels.id;
   ```

5. Subquery
   Example:
   ```sql
   select
   users.name as nama_user,
   (
     select
         count(*)
     from
         channel_subscribers
     where
         channel_subscribers.user_id = users.id
   ) as channel_yang_diikuti,
   channels.name as nama_channel,
   (
     select
         count(*)
     from
         channel_subscribers
     where
         channel_subscribers.channel_id = channels.id
   ) as pengikut_channel
   from
   users
   left join channels on channels.user_id = users.id
   ```
6. CTE (Common Table Expression)
   Example:
   ```sql
   with subscribers as (
    select
        channel_subscribers.channel_id,
        count(*)
    from
        channel_subscribers
    group by
        channel_subscribers.channel_id
   ), subscribes as (
     select
        channel_subscribers.user_id,
        count(*)
    from
        channel_subscribers
    group by
         channel_subscribers.user_id
   )
   select
    users.name as nama_user,
    subscribes.count as channel_yang_diikuti,
    channels.name as nama_channel,
    subscribers.count as pengikut_channel
   from
    users
    left join channels on channels.user_id = users.id
    left join subscribes on subscribes.user_id = users.id
    left join subscribers on subscribers.channel_id = channels.id
   ```

```

```
