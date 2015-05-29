<?php namespace App\Http\Controllers;



class WelcomeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/
	private $body = "loading";     
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('guest');
	}

	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		$title = "Jorge P Mendoza";

		return view('welcome')->with([
			'title' => $title,
			'body'=> $this->body
			]);
	}

	public function about() {
		$title = "About Jorge P Mendoza";

		return view('ComingSoon')->with([
			'title' => $title,
			'body'=> $this->body
			]);
		
	}


	public function resume() {
		$title = "Jorge P Mendoza's Resume";

		return view('resume')->with([
			'title' => $title,
			'body'=> $this->body
			]);
	}


	public function projects() {
		$title = "Jorge P Mendoza's projects";
		

		return view('projects')->with([
			'title' => $title,
			'body'=> $this->body
			]);
	}

	public function credits() {
		$title = "credits";
		

		return view('ComingSoon')->with([
			'title' => $title,
			'body'=> $this->body
			]);
	}


}
