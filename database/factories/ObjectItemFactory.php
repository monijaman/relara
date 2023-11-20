<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use function Laravel\Prompts\text;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ObjectItem>
 */
class ObjectItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(), // Str::random(10),
            'category_id' => 1,
            'photo' => $this->faker->name.'jpg',
            'status' => 1,
            'view_count' => 1,
            'description' =>$this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'code' => Str::random(10),
        ];
    }
}
