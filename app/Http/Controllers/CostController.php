<?php

namespace App\Http\Controllers;

use App\Http\Resources\CostResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Cost;
use Inertia\Response;

class CostController extends Controller
{
    public function index(): Response
    {
        $costs = CostResource::collection(Cost::with('category', 'frequency')->get())->toArray(request());
        // $costs->load('category', 'frequency');

        return Inertia::render('costs/costs', [
            'costs' => $costs
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'amount_cents' => 'required|decimal:0,2',
            'frequency_id' => 'required|integer',
            'category_id' => 'required|integer',
        ]);

        Cost::create($validated);

        return response()->json($validated, 201);
    }

    public function destroy(String $id)
    {
        $cost = Cost::find($id);

        $cost->delete();
    }
}
