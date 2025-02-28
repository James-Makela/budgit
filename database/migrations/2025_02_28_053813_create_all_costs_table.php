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
        Schema::create('all_costs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->integer('amount_cents');
            $table->integer('frequency_days');
            $table->date('first_payment');
            $table->string('category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('all_costs');
    }
};
