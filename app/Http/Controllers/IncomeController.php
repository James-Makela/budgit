<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\IncomeResource;
use App\Models\Income;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class IncomeController extends Controller
{
    public function index(): Response
    {
        $income = IncomeResource::collection(Income::with('frequency')->get())->toArray(request());

        return Inertia::render('income/income', [
            'income' => $income
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'source' => 'required|string|max:50',
            'person' => 'required|string|max:50',
            'income_cents' => 'required|decimal:0,2',
            'frequency_id' => 'required|integer',
        ]);

        Income::create($validated);

        return response()->json($validated);
    }
}
