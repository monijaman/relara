<?php

namespace Database\Seeders;

use App\Models\ObjectItem;
use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ObjectItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $this->faker = Faker::create();

        ObjectItem::factory(100)->create()->each(function(ObjectItem $objectItem) {
            ObjectItem::factory()
                ->create([
                    'name' => $this->faker->name(), // Str::random(10),
                    'slug' => $this->faker->unique()->safeEmail,
                    'category_id' => 1,
                    'photo' => $this->faker->name.'jpg',
                    'status' => 1,
                    'view_count' => 1,
                    'description' => $this->faker->realText($maxNbChars = 200, $indexSize = 2),
                    'code' => Str::random(10),

                ]);
        });
    }
}
