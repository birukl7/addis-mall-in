<?php

namespace Database\Factories;

use App\Models\Mall;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FreeSpace>
 */
class FreeSpaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'mall_id' => Mall::inRandomOrder()->first()->id,
            'locaton' => fake()->address(),
            'size' => fake()->numberBetween(2,50).'m square',
            'price' =>fake()->numberBetween(10000, 100000),
            'description' => fake()->paragraph(2),
        ];
    }
}
