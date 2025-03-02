<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Frequency extends Model
{
    protected $fillable = ['name', 'days'];

    public function frequencies() {
        return $this->hasMany(Cost::class);
    }
}
