<?php 


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/*
|--------------------------------------------------------------------------
| Main Routes
|--------------------------------------------------------------------------
|
| Here are the routes to the main pages of my webiste
|
*/



//foutes for main page
Route::get('/', 'WelcomeController@index');
Route::get('resume',"WelcomeController@resume");
Route::get('projects', "WelcomeController@projects");
Route::get('about', "WelcomeController@about");
Route::get('credits', "WelcomeController@credits");

//

route::get('MixedSayings', "ProverbController@index");

route::group(['prefix' => 'api/v1'], function () {

	route::get('proverb', "ProverbController@getProverb");
	route::get('proverb/{idA}/{idB}', "ProverbController@getProverbs");
});

route::group(['prefix' => 'games'], function () {
	route::get('/', function (){
		 return view()->file(url('/site/public/projects/games/alienabduction/alienabduction.html'));
	});

});


Route::get('home', 'HomeController@index');


Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
