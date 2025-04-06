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
        return Inertia::render('income/income', [
            'income' => $this->retrieveIncomes(),
        ]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'source' => 'required|string|max:50',
            'person' => 'required|string|max:50',
            'income_cents' => 'required|decimal:0,2',
            'frequency_id' => 'required|integer',
        ]);

        Income::create($validated);

        return Inertia::render('income/income', [
            'income' => $this->retrieveIncomes(),
        ]);
    }

    public function destroy(String $id)
    {
        $income = Income::find($id);

        $income->delete();
    }

    protected function retrieveIncomes()
    {
        return IncomeResource::collection(Income::with('frequency')->get())->toArray(request());
    }
}
