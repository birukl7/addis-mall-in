<?php

use App\Models\Mall;
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
        Schema::create('free_spaces', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Mall::class)->constrained()->cascadeOnDelete();
            $table->string('location');
            $table->integer('size')->nullable();
            $table->decimal('price',10,2)->nullable();
            $table->boolean('available')->default(true);
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('free_spaces');
    }
};