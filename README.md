# Yazra
### https://yajrabox.com/docs/laravel-datatables/10.0/quick-starter

### If You face this problem (could not find driver (SQL: PRAGMA foreign_keys = ON;))

You can simply run bellow command on your Ubuntu system

sudo apt-get install php-sqlite3
Also if you want to install specific version like php 8.1 simply run bellow command

sudo apt install php8.1-sqlite3
You might need to enable pdo_sqlite extension in your php.ini too, you can get the path of your loaded ini with the below command:

php --ini
simply add extension=pdo_sqlite to your php.ini and verify it is loaded by running

php -m | grep pdo_sqlite

# #Generate Seeder

php artisan migrate
php artisan tinker


User::factory(100)->create()

#view a sqllite database;

sudo apt install sqlitebrowser

sqlitebrowser


## spreadsheet export

composer require phpoffice/phpspreadsheet

## for ubuntu pdf problem
https://gist.github.com/srmds/2507aa3bcdb464085413c650fe42e31d
$ sudo apt-get update && sudo apt-get -y install wkhtmltopdf 
