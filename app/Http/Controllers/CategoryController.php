<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function categoryNames()
    {
        $categoryNames = Category::all();
        return response()->json($categoryNames);
    }
}
