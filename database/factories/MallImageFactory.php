<?php

namespace Database\Factories;

use App\Models\Mall;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MallImage>
 */
class MallImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'mall_id' =>  Mall::inRandomOrder()->first()->id,
            'image_path' => 'http://picsum.photos/seed/'.fake()->randomNumber(100000).'/1000/1000'
        ];
    }
}
