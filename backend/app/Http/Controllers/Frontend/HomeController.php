<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Admin\Categorie;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getMenu(){
        $responseData = Categorie::with('child:id,parent_id,type,name,url')->where('parent_id', null)->get();
        return response()->json(['menus' => $responseData], 200);
    }
}
