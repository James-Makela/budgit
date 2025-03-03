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
}
