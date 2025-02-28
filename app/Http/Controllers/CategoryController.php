<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        $categories = Category::all();

        return view('categories.index', ["categories" => $categories]);
    }

    public function create() {
        //
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
        ]);

        Category::create($validated);

        return redirect()->route('categories.index')->with('success', 'Category Added!');
    }
}
