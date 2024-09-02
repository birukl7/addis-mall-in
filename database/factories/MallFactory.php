<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mall>
 */
class MallFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'address' => fake()->address(),
            'city' => fake()->city(),
            'state'=> fake()->state(),
            'postal_code'=> fake()->postcode(),
            'country'=> fake()->country(),
            'contact_number' => fake()->phoneNumber(),
            'email' => fake()->email(),
            'floors' => fake()->randomNumber(2),
            'opening_hours' => fake()->time(),
            'closing_hours' => fake()->time(),
            'parking_available' => fake()->boolean(),
            'website' => fake()->url(),
            'description' => fake()->paragraph(5),
            'latitude' => fake()->latitude(),
            'longitude' => fake()->longitude(),
            'subcity' => fake()->randomElement(['yeka', 'Lemi kura','arada', 'kolfe', 'akaki kality', 'lideta', 'nifas silk', 'bole']),
            'featured' => fake()->boolean(),
            'estimated_people' => fake()->numberBetween(10,1000),
            'office_number' => fake()->numberBetween(10,100),
        ];
    }
}
