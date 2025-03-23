<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $categories = Category::all();

        return Inertia::render('categories/categories', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'color' => 'string',
            'icon' => 'integer',
        ]);

        Category::create($validated);

        return response()->json($validated, 201);
    }

    public function categoryNames()
    {
        $categoryNames = Category::all();
        return response()->json($categoryNames);
    }
}
