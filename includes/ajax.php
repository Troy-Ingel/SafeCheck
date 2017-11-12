<?
include("functions.php");
$apiKey = "AIzaSyAqhA6LVr9PffEKYcXgrnm6fGpic5PJm0g";

// AIzaSyAlLF1TqSdvI7DY8F0DCVPz7M2Rp62IzGU

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
	$url .= '&key=' . urlencode($apiKey);

	$json = file_get_contents($url);

	print $json;
} else if(isset($_POST["add-status"])){
	$first_name = $_POST["first_name"];
	$last_name = $_POST["last_name"];
	$lat = $_POST["lat"];
	$lon = $_POST["lon"];
	$status = $_POST["status"];

	$sql = "
		INSERT INTO CheckIn (
			first_name,
			last_name,
			lat,
			lon,
			date_added,
			status
		) VALUES (
			'$first_name',
			'$last_name',
			'$lat',
			'$lon',
			CURDATE(),
			'$status'
		);
	";

	$id = runSQL($sql);
	$_SESSION["user"] = $id;
	print $id;
} else if(isset($_GET["get-people"])){
	$sql = "SELECT * FROM CheckIn";

	$json = qryToJSON($sql);
	
	if($json == false){
		print "{\"error\": \"No data was found\"}";
	} else{
		print $json;
	}
} else if(isset($_GET["get-person"])){
	$id = $_GET["id"];
	$sql = "SELECT * FROM CheckIn WHERE id = $id";

	$json = qryToJSON($sql);
	
	if($json == false){
		print "{\"error\": \"No data was found\"}";
	} else{
		print $json;
	}
} else if(isset($_GET["get-shelters"])){
	$sql = "SELECT * FROM Shelter";

	$json = qryToJSON($sql);
	
	if($json == false){
		print "{\"error\": \"No data was found\"}";
	} else{
		print $json;
	}
} else if(isset($_POST["update-status"])){
	$id = $_POST["id"];
	$status = $_POST["status"];

	$sql = "UPDATE CheckIn SET status = '$status' WHERE id = $id";

	runSQL($sql);
}
?>
