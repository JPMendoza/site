<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Proverbs;

class ProverbController extends Controller {

	private $body = "";    

	public function index() {
		
		$title = "Mixed Proverbs";

		return view('mixedproverbs')->with([
			'title' => $title, 
			'body'=> $this->body,
			'proverb' => $this->getProverb(),
			]); //Proverbs::all();

	}

	public function getProverb()
	{
		$a = rand(1, Proverbs::count());
		$b = rand(1, Proverbs::count());
		$proverb = Proverbs::Find($a)->partA . " " . Proverbs::Find($b)->partB;

		return $proverb;

	}

}
