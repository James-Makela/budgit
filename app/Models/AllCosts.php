<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AllCosts extends Model
{
    protected $fillable = ['name', 'amount_cents', 'frequency_days', 'first_payment', 'category'];
    /** @use HasFactory<\Database\Factories\AllCostsFactory> */
    use HasFactory;

    // Get the cost as a string
    protected function amountCents(): Attribute
    {
        return Attribute::make(
            get: fn (int $value) => "$" . ($value / 100) . "." . (str_pad($value % 100, 2, '0')),
        );
    }
}
