<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Frequency;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cost>
 */
class CostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'amount_cents' => fake()->numberBetween(1, 10000),
            'frequency_id' => Frequency::inRandomOrder()->first()->id,
            'first_payment' => fake()->dateTimeThisMonth(),
            'category_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}
