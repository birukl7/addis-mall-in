<?php

namespace Database\Factories;

use App\Models\FreeSpace;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FreeSpaceImage>
 */
class FreeSpaceImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'free_space_id' => FreeSpace::inRandomOrder()->first()->id,
            'image_path' => 'http://picsum.photos/seed/'.fake()->numberBetween(1, 80000).'/1000/1000'
        ];
    }
}
