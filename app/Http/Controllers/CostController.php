<?php

namespace App\Http\Controllers;

use App\Http\Resources\CostResource;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cost;
use Inertia\Response;

class CostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('costs/costs', [
            'costs' => $this->retrieveCosts(),
        ]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'amount_cents' => 'required|decimal:0,2',
            'frequency_id' => 'required|integer',
            'category_id' => 'required|integer',
        ]);

        Cost::create($validated);

        return Inertia::render('costs/costs', [
           'costs' => $this->retrieveCosts(),
        ]);
    }

    public function update(Request $request, Cost $cost): Response
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'amount_cents' => 'required|decimal:0,2',
            'frequency_id' => 'required|integer',
            'category_id' => 'required|integer',
        ]);

        $cost->update($validated);

        return Inertia::render('costs/costs', [
           'costs' => $this->retrieveCosts(),
        ]);
    }

    public function destroy(String $id)
    {
        $cost = Cost::find($id);

        $cost->delete();
    }

    protected function retrieveCosts()
    {
        return CostResource::collection(Cost::with('category', 'frequency')->get())->toArray(request());
    }
}
