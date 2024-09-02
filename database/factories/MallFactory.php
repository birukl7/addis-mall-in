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
            'parking_avaibale' => fake()->boolean(),
            'website' => fake()->url(),
            'description' => fake()->paragraph(5),
            'latitude' => fake()->randomNumber(34),
            'longitude' => fake()->randomNumber(20),
        ];
    }
}
