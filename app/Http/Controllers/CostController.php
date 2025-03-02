<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cost;

class CostController extends Controller
{
    public function index()
    {
        $costs = Cost::all();
        $costs->load('category', 'frequency');

        return Inertia::render('costs/costs', [
            'costs' => $costs
        ]);
    }
}
