<?php

namespace Database\Seeders;

use App\Models\Mall;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MallSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mall::factory(10)->create();
    }
}
