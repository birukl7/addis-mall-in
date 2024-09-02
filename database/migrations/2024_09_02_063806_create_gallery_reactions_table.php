<?php

use App\Models\Gallery;
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
        Schema::create('gallery_reactions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Gallery::class)->constrained()->cascadeOnDelete();
            $table->integer('love')->nullable();
            $table->integer('fire')->nullable();
            $table->integer('like')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery_reactions');
    }
};
