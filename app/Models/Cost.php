<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function Pest\Laravel\get;

class Cost extends Model
{
    protected $fillable = ['name', 'amount_cents', 'frequency_id', 'first_payment', 'category_id'];

    /** @use HasFactory<\Database\Factories\CostFactory> */
    use HasFactory;

    // Multiply when saving to save cents value
    protected function amountCents(): Attribute
    {
        return Attribute::make(
            set: fn (float $value) => intval(round($value * 100)),
        );
    }

    protected function yearlyCost(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->calculateYearlyCost()
        );
    }

    // Calculate the yearly cost based on cost frequency
    public function calculateYearlyCost() {
        if (!$this->frequency || $this->frequency->days == 0)
        {
            return $this->amount_cents;
        }
        $yearly_cents = $this->amount_cents / $this->frequency->days * 365;
        $yearly_dollars = $yearly_cents / 100;
        return $yearly_dollars;
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function frequency() {
        return $this->belongsTo(Frequency::class);
    }
}

