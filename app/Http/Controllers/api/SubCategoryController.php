<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    public function index(Request $request, $id)
    {

        $sub_category = SubCategory::where('category_id', $id)->get();
        return response()->json($sub_category);
    }
}
