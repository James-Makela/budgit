<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AllCosts extends Model
{
    protected $fillable = ['name', 'amount_cents', 'frequency_days', 'first_payment', 'category'];
    /** @use HasFactory<\Database\Factories\AllCostsFactory> */
    use HasFactory;
}
