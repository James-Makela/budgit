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
        Schema::create('frequencies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->integer('multiplier');
        });

        DB::table('frequencies')->insert([
            ['name' => 'Daily', 'multiplier' => 365],
            ['name' => 'Weekly', 'multiplier' => 52],
            ['name' => 'Fortnightly', 'multiplier' => 26],
            ['name' => 'Monthly (28 days)', 'multiplier' => 13],
            ['name' => 'Monthly', 'multiplier' => 12],
            ['name' => 'Bi-Monthly', 'multiplier' => 6],
            ['name' => 'Quarterly', 'multiplier' => 4],
            ['name' => 'Half Yearly', 'multiplier' => 2],
            ['name' => 'Yearly', 'multiplier' => 1],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frequencies');
    }
};
