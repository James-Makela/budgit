<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cost extends Model
{
    protected $fillable = ['name', 'amount_cents', 'frequency_id', 'first_payment', 'category_id'];

    /** @use HasFactory<\Database\Factories\CostFactory> */
    use HasFactory;

    public function yearlyCost(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->calculateYearlyCost()
        );
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function frequency() {
        return $this->belongsTo(Frequency::class);
    }

    // Calculate the yearly cost based on cost frequency
    protected function calculateYearlyCost(): int {
        if (!$this->frequency || $this->frequency->multiplier == 0)
        {
            return $this->amount_cents;
        }
        $yearly_cents = $this->amount_cents * $this->frequency->multiplier;
        return $yearly_cents;
    }
}

