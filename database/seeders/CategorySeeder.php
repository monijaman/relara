<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

use App\Models\Category;
use App\Models\SubCategory;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $data = [
            'Clothing' => ['Woman Shoes', 'Men\'s Shirts'],
            'Handy' => ['Smartphones', 'Smartwatches '],
            'Cosmetics' => ['LipStick', 'Powder ']
        ];

        foreach ($data as $category => $subCategories)
        {
            $id = Category::create(['name' => $category])->id;

            foreach ($subCategories as $subCategory) {
                SubCategory::create([
                    'category_id' => $id,
                    'name' => $subCategory
                ]);
            }
        }



//        $categories = CategorySeeder::factory()
//            ->count(10)
//            ->create({
//                'name' => $this->faker->name;
//                'slug' => $this->faker->name,
//                'status',
//            })->each(function(User $user) {
//                SubCategory::factory()
//                    ->count(3)
//                    ->create([
//                        'user_id' => $user->id,
//                    ]);
//            });
    }
}
