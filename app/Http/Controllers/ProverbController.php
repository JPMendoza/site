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
		$proverb = Proverbs::Find(1)->partA . " " . Proverbs::Find(2)->partB;

		return $proverb;

	}

}
