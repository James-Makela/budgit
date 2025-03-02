<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cost extends Model
{
    protected $fillable = ['name', 'amount_cents', 'frequency_id', 'first_payment', 'category_id'];
    protected $appends = ['formatted_amount_cents'];

    /** @use HasFactory<\Database\Factories\CostFactory> */
    use HasFactory;

    // Multiply when saving to save cents value
    protected function amountCents(): Attribute
    {
        return Attribute::make(
            set: fn (float $value) => intval(round($value * 100)),
        );
    }

    // Get dollars amount as string
    public function getFormattedAmountCentsAttribute(): String
    {
        return "$" . number_format($this->amount_cents / 100, 2, '.', ',');
    }

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function frequency() {
        return $this->belongsTo(Frequency::class);
    }
}
