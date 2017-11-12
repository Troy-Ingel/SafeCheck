<?
include("functions.php");
$apiKey = "AIzaSyDKWd6bBOs6KH10TcE5729ZTWeUdrIdyLI";

if(isset($_GET["directions"])){
	$baseUrl = "https://maps.googleapis.com/maps/api/directions/json";

	$url = $baseUrl . '?origin=' . urlencode($_GET["origin"]) . '&destination=' . urlencode($_GET["destination"]);
	$url .= '&key=' + urlencode($apiKey);
	$url .= '&mode=' . urlencode($_GET['mode']);

	$json = file_get_contents($url);

	print $json;
} else if(isset($_GET["reverse-geocode"])){
	$baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
	$latlng = $_GET["latlng"];
	$url = $baseUrl . '?latlng=' . $latlng;
	$url .= '&key=' . $apiKey;

	$json = file_get_contents($url);

	print $json;
}
