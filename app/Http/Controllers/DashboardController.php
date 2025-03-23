<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cost;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $all_costs = Cost::all();
        $total_yearly = 0;

        foreach ($all_costs as $cost)
        {
            $yearly = $cost->yearly_cost;
            $total_yearly += $yearly;
        }

        return Inertia::render('dashboard', [
            'total_yearly' => $total_yearly
        ]);
    }
}
