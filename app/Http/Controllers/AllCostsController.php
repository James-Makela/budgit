<?php

namespace App\Http\Controllers;

use App\Models\AllCosts;
use Illuminate\Http\Request;

class AllCostsController extends Controller
{
    public function index() {
        $allCosts = AllCosts::all();

        return view('all_costs.index', ["allCosts" => $allCosts]);
    }

    public function create() {
        return view('all_costs.create');
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'amount_cents' => 'required|integer',
            'frequency_days' => 'integer',
            'first_payment' => 'date',
            'category' => 'string|max:255',
        ]);

        AllCosts::create($validated);

        return redirect()->route('allCosts.index')->with('success', 'Cost Added!');
    }
}
