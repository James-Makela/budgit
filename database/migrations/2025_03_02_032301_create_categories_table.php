<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->string('color')->nullable();
            $table->string('icon')->nullable();
        });

        DB::table('categories')->insert([
            ['name' => 'Housing', 'color' => 40],
            ['name' => 'Spending', 'color' => 290],
            ['name' => 'Food', 'color' => 140],
            ['name' => 'Transport', 'color' => 240],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
