<?php

namespace App\Http\Controllers;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

use App\Models\ObjectItem;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class ObjectItemController extends Controller
{
    /**
     * Display the Object's profile form.
     */
    public function show(Request $request, $id): Response
    {

        $objectItem = ObjectItem::where('id', $id)->first();


        $category = Category::where('status', '1')->get();


        // It will reject all accodrding condition
        $categories = $category->reject(function (Category $category) {
            return $category->id > 50;
        });

      // echo "<pre>"; print_r($category[0]); exit();

        if (!empty($objectItem)) {
            return Inertia::render('Object/Edit', [
                'objectItem' => $objectItem->toArray(),
                'categories' => $categories
            ]);
        }else{

            abort(404);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        // Here we provide posts from the database to prop that we created in component

        $_objects = ObjectItem::where(['status' => 1, 'category_id' =>1 ])->orderBy('id', "DESC")->paginate(10);

        return Inertia::render('Object/Index', [
            'ObjectItem' =>$_objects->toArray()
        ]);
    }
}
