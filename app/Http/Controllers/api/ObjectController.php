<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use http\Env\Response;
use Illuminate\Http\Request;
use  App\Models\ObjectItem;
use Illuminate\Support\Facades\Validator;

class ObjectController extends Controller
{


    /**
     * Upload Image
     * @param $request
     * @return JSON response
     */
    public function fileupload(Request $request)
    {
        $imagesName = [];
        $response = [];

        $validator = Validator::make($request->all(),
            [
                'images' => 'required',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }

        if( $request->hasFile('images') ) {

            foreach ($request->file('images') as $image) {
                $filename = time() . rand(3, 9) . '.' . $image->getClientOriginalExtension();
                $image->move('uploads/', $filename);

//                Image::create([
//                    'image_name' => $filename
//                ]);
            }

            $response["status"] = "successs";
            $response["filename"] = $filename;
            $response["message"] = "Success! image(s) uploaded";
        } else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
        return response()->json($response);
    }


/*
File upload
*/
public
function fileuploads(Request $request)
{


    if ($request->hasFile('file')) {

        // Upload path
        $destinationPath = 'files/';

        // Get file extension
        $extension = $request->file('file')->getClientOriginalExtension();

        // Valid extensions
        $validextensions = array("jpeg", "jpg", "png", "pdf");

        // Check extension
        if (in_array(strtolower($extension), $validextensions)) {

            // Rename file
            $fileName = $request->file('file')->getClientOriginalName() . time() . '.' . $extension;
            // Uploading file to given path
            $request->file('file')->move($destinationPath, $fileName);

        }

    }
}
}
