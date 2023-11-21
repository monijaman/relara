<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{


    public function getCategory(Request $request)
    {

        $categories = Category::where('status', 1)->get();
        return response()->json($categories);
    }
}
