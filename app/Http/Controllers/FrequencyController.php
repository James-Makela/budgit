<?php

namespace App\Http\Controllers;

use App\Models\Frequency;
use Illuminate\Http\Request;

class FrequencyController extends Controller
{
    public function frequencyNames()
    {
        $frequencyNames = Frequency::all();
        return response()->json($frequencyNames);
    }
}
