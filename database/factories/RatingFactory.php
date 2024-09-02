<?php

namespace Database\Factories;

use App\Models\Mall;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rating>
 */
class RatingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'mall_id'=> Mall::inRandomOrder()->first()->id,
            'user_id' => User::inRandomOrder()->first()->id,
            'rating' => fake()->randomElement([1,2,3,4,5]),
        ];
    }
}
