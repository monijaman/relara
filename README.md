
# Problem

##

    SQLSTATE[HY000] [2002] Connection refused (SQL: select * from information_schema.tables where table_schema = laravel8 and table_name = migrations and table_type = 'BASE TABLE')

docker network inspect bridge

Copy "Gateway" ip address and replace with DB_HOST value in .env file. It will work
