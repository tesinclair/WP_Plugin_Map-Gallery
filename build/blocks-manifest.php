<?php
// This file is generated. Do not modify it manually.
return array(
	'map-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'map-gallery/map-gallery',
		'version' => '0.1.0',
		'title' => 'Map Gallery',
		'category' => 'widgets',
		'description' => 'Map Gallery Widget that displays images on map using geolocation data.',
		'example' => array(
			
		),
		'attributes' => array(
			'hoverGrowScale' => array(
				'type' => 'number',
				'default' => 1.1
			),
			'mapHeight' => array(
				'type' => 'number',
				'default' => 500
			),
			'mapWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'imgIconInitialHeight' => array(
				'type' => 'number',
				'default' => 20
			),
			'imgIconInitialWidth' => array(
				'type' => 'number',
				'default' => 10
			)
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'map-gallery',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	)
);
