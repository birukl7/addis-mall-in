<?php

namespace Database\Seeders;

use App\Models\FreeSpace;
use App\Models\FreeSpaceImage;
use App\Models\MallImage;
use App\Models\Rating;
use App\Models\Review;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        User::factory(5)->create();

        $this->call(MallSeeder::class);
        Rating::factory(5)->create();
        MallImage::factory(10)->create();
        Rating::factory(10)->create();
        Review::factory(10)->create();
        FreeSpace::factory(10)->create();
        FreeSpaceImage::factory(50)->create();
    }
}
