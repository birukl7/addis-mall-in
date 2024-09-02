<?php

namespace Database\Factories;

use App\Models\Mall;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Amenity>
 */
class AmenityFactory extends Factory
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
            'name' =>
            fake()->randomElement(['security', 'gym', 'furnished']),
            'description' => fake()->paragraph(),
            
        ];
    }
}
