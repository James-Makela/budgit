<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cost;
use App\Models\Income;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $total_yearly_costs = Cost::all()->sum('yearly_cost');
        $total_yearly_income = Income::all()->sum('yearly_income');

        return Inertia::render('dashboard', [
            'total_yearly_costs' => $total_yearly_costs,
            'total_yearly_income' => $total_yearly_income,
        ]);
    }
}
