<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = ['date', 'description', 'credit_cents', 'debit_cents', 'balance_cents', 'category_id'];

    public function category() {
        return $this->belongsTo(Category::class);
    }
}
