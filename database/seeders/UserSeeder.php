<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;


use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $this->faker = Faker::create();

        User::factory(100)->create()->each(function(User $user) {
            User::factory()
                ->create([
                    'name' => $this->faker->name, // Str::random(10),
                    'email' => $this->faker->unique()->safeEmail,
                    'email_verified_at' => now(),
                    'remember_token' => Str::random(10),
                    'password' => Hash::make('password'),
                    'phone' =>$this->faker->phoneNumber,
                    'role' =>1,
                    'status' =>1

                ]);
        });

//
//        DB::table('users')->insert([
//            'name' => Str::random(10),
//            'email' => Str::random(10).'@gmail.com',
//            'password' => Hash::make('password'),
//        ]);
    }
}
