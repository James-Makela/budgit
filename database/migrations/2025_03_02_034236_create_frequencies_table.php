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
            $table->integer('days');
        });

        DB::table('frequencies')->insert([
            ['name' => 'Daily', 'days' => 1],
            ['name' => 'Weekly', 'days' => 7],
            ['name' => 'Fortnightly', 'days' => 14],
            ['name' => 'Monthly (28 days)', 'days' => 28],
            ['name' => 'Monthly', 'days' => 0],
            ['name' => 'Bi-Monthly', 'days' => 0],
            ['name' => 'Quarterly', 'days' => 0],
            ['name' => 'Half Yearly', 'days' => 0],
            ['name' => 'Yearly', 'days' => 0],
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
