<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Frequency extends Model
{
    protected $fillable = ['name', 'multiplier'];

    public function frequencies() {
        return $this->hasMany(Cost::class);
        return $this->hasMany(Income::class);
    }
}
