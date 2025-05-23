<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'color', 'icon'];
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;

    public function costs() {
        return $this->hasMany(Cost::class);
    }

    public function transactions() {
        return $this->hasMany(Transaction::class);
    }
}
