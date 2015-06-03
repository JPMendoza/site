<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class proverbs extends Model {

	//
	protected $fillable = [
		'genre',
		'proverb',
		'partA',
		'partB',
	];

}
