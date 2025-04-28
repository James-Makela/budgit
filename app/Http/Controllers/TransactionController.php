<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TransactionController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('all-transactions/all-transactions', [
            'transactions' => $this->retrieveTransactions(),
        ]);
    }

    public function store(Request $request): Response
    {

        $validated = $request->validate([
            'date' => 'required|string',
            'description' => 'required|string',
            'credit_cents' => 'nullable|integer',
            'debit_cents' => 'nullable|integer',
            'balance_cents' => 'required|integer',
            'category_id' => 'integer',
        ]);

        Transaction::create($validated);

        return Inertia::render('all-transactions/all-transactions', [
            'transactions' => $this->retrieveTransactions(),
        ]);
    }

    protected function retrieveTransactions()
    {
        return TransactionResource::collection(Transaction::with('category')->get())->toArray(request());
    }
}
