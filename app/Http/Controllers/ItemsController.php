<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemsController extends Controller
{
    public function items(){
        $items = Item::all();
        dd($item);
    }
}
