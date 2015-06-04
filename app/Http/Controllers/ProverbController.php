<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\proverbs;

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
		while ($a == $b)
			$b = rand(1, Proverbs::count());

		$proverb = [Proverbs::Find($a), Proverbs::Find($b)];

		return $proverb;

	}

	public function getProverbs($idA, $idB)
	{
		$proverb = [Proverbs::Find($idA), Proverbs::Find($idB)];

		return $proverb;

	}

}
