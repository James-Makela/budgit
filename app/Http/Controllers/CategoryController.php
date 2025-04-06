<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('categories/categories', [
            'categories' => $this->retrieveCategories(),
        ]);
    }

    public function store(Request $request): Response
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'color' => 'string',
            'icon' => 'integer',
        ]);

        Category::create($validated);

        return Inertia::render('categories/categories', [
            'categories' => $this->retrieveCategories(),
        ]);
    }

    public function destroy(String $id)
    {
        $category = Category::find($id);

        $category->delete();
    }

    public function categoryNames()
    {
        $categoryNames = Category::all();
        return response()->json($categoryNames);
    }

    protected function retrieveCategories()
    {
        return Category::all();
    }
}
