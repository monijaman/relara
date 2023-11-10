
# Problem

##

    SQLSTATE[HY000] [2002] Connection refused (SQL: select * from information_schema.tables where table_schema = laravel8 and table_name = migrations and table_type = 'BASE TABLE')

docker network inspect bridge

Copy "Gateway" ip address and replace with DB_HOST value in .env file. It will work


#Migrations

##Generating Migrations

php artisan make:migration create_flights_table



php artisan migrate:rollback


php artisan migrate --force

php artisan migrate:status


#Squashing Migrations
php artisan schema:dump
 
# Dump the current database schema and prune all existing migrations...
php artisan schema:dump --prune

When you execute this command, Laravel will write a "schema" file to your application's database/schema directory. 


Laravel migratons:

php artisan make:model Todo -all


-c, --controller Create a new controller for the model

-f, --factory Create a new factory for the model

--force Create the class even if the model already exists

-m, --migration Create a new migration file for the model

-s, --seed Create a new seeder file for the model

-p, --pivot Indicates if the generated model should be a custom intermediate table model

-r, --resource Indicates if the generated controller should be a resource controller


php artisan make:model --migration --controller test

for resources:

php artisan make:model --migration --controller test --resource  


# How to Update Table structure using migration – Laravel

3. Method 1 – Refresh Migration
it recreates the whole database and deletes its data.
php artisan migrate:refresh


#Soft Delete

public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('slug')->unique();            
        $table->string('title');
        $table->text('description'); 
        $table->text('post');
        $table->timestamps();
        $table->softDeletes(); // This adds the 'deleted_at' column
   });
}

Next, In your Eloquent model (in this case, the Post model), use the SoftDeletes trait. Here's an example:

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes; // Add this line to enable soft deletes

    // Other model properties and methods...
}

public function deletePost($id)
{
    $post = Post::find($id);
    $post->delete(); // This soft deletes the post

    // Additional logic...
}

###Restore

public function restorePost($id)
{
    $post = Post::withTrashed()->find($id);
    $post->restore(); // This restores the soft-deleted post

    // Additional logic...
}



Laravel still got you covered with the forceDelete() method.


public function deletePostForever($id)
{
    $post = Post::find($id);
    $post->forceDelete(); // This permanently deletes the post for ever!

    // Additional logic...
}


# migrations Rollback
php artisan migrate:rollback --step=5


Drop All Tables & Migrate

php artisan migrate:fresh
 
php artisan migrate:fresh --seed

php artisan db:seed --class=UserSeeder


drop existing
php artisan migrate:fresh --seed
 
php artisan migrate:fresh --seed --seeder=UserSeeder


The migrate:reset command will roll back all of your application's migrations:

php artisan migrate:reset



# Faker

https://fakerphp.github.io/formatters/