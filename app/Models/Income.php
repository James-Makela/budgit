<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    protected $fillable = ['source', 'person', 'income_cents', 'frequency_id'];

    /** @use HasFactory<\Database\Factories\IncomeFactory> */
    use HasFactory;

    public function yearlyIncome(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->calculateYearlyIncome()
        );
    }

    public function frequency() {
        return $this->belongsTo(Frequency::class);
    }

    // Calculate the yearly income based on frequency
    protected function calculateYearlyIncome() {
        if (!$this->frequency || $this->frequency->multiplier == 0)
        {
            return $this->income_cents;
        }
        $yearly_cents = $this->income_cents * $this->frequency->multiplier;
        return $yearly_cents;
    }
}
