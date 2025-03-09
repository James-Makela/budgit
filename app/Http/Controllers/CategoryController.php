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
        $categories = Category::all();

        return Inertia::render('categories/categories', [
            'categories' => $categories
        ]);
    }
    public function categoryNames()
    {
        $categoryNames = Category::all();
        return response()->json($categoryNames);
    }
}
