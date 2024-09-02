<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('malls', function (Blueprint $table) {
          $table->id(); // UUID as primary key
          $table->string('name');
          $table->string('address');
          $table->string('city');
          $table->string('state')->nullable();
          $table->string('postal_code')->nullable();
          $table->string('country');
          $table->string('contact_number')->nullable();
          $table->string('email')->nullable();
          $table->integer('floors');
          $table->string('opening_hours')->nullable();
          $table->string('closing_hours')->nullable();
          $table->boolean('parking_available')->default(false);
          $table->string('website')->nullable();
          $table->text('description')->nullable();
          $table->decimal('latitude', 10, 7)->nullable();
          $table->decimal('longitude', 10, 7)->nullable();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('malls');
    }
};
