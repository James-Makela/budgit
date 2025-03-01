<?php

namespace App\Http\Controllers;

use App\Models\AllCosts;
use App\Models\Category;
use Illuminate\Http\Request;

class AllCostsController extends Controller
{
    public function index() {
        $allCosts = AllCosts::all();

        return view('all_costs.index', ["allCosts" => $allCosts]);
    }

    public function show(AllCosts $allCosts) {
        $allCosts->load('category');

        return view('all_costs.show', ['allCosts' => $allCosts]);
    }

    public function create() {
        $categories = Category::all();

        return view('all_costs.create', ['categories' => $categories]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'amount_cents' => 'required|decimal:2',
            'frequency_days' => 'integer',
            'first_payment' => 'date',
            'category_id' => 'required|exists:categories,id',
        ]);

        AllCosts::create($validated);

        return redirect()->route('allCosts.index')->with('success', 'Cost Added!');
    }

    public function destroy(AllCosts $cost) {
        $cost->delete();

        return redirect()->route('allCosts.index')->with('success', 'Cost Deleted!');
    }
}
