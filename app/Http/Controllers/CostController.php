<?php

namespace App\Http\Controllers;

use App\Http\Resources\CostResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cost;

class CostController extends Controller
{
    public function index()
    {
        $costs = CostResource::collection(Cost::with('category', 'frequency')->get())->toArray(request());
        // $costs->load('category', 'frequency');

        return Inertia::render('costs/costs', [
            'costs' => $costs
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'amount_cents' => 'required|decimal:2',
            'frequency_id' => 'required|integer',
            'category_id' => 'required|integer',
        ]);

        Cost::create($validated);

        return redirect()->route('costs')->with('success', 'Cost Added!');
    }
}
