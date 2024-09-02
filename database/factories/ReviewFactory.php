<?php

namespace Database\Factories;

use App\Models\Mall;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "user_id" => User::inRandomOrder()->first()->id,
            "mall_id" => Mall::inRandomOrder()->first()->id,
            'content' => fake()->paragraphs(3, true),
        ];
    }
}
