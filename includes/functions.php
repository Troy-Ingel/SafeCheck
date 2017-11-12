<?
session_start();

function encrypt($data, $password){
	return openssl_encrypt ($data, 'aes256', $password);
}
function decrypt($data, $password){
	return openssl_decrypt($data, 'aes256', $password);
}
function runSQL($sql){
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "disaster-help";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	if ($conn->query($sql) === TRUE) {
		return $conn->insert_id;
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
}
function getRecordSet($qry){
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "disaster-help";

// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$result = $conn->query($qry);

	if ($result->num_rows > 0) {
		return $result;
	} else {
		return false;
	}
	$conn->close();
}
function qryToJSON($qry){
	$myArray = array();
	$result = getRecordSet($qry);

	if($result != false){
		while($row = $result->fetch_assoc()) $myArray[] = $row;
		return json_encode($myArray);
	} else{
		return false;
	}
}
function hashText($text){
	return password_hash($text, PASSWORD_BCRYPT);
}
function verifyPassword($password, $hash){
	if(password_verify($password, $hash)) {
		return true;
	}
	else{
		return false;
	}
}
?>
