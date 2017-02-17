<?php

/*
Getting the content and check in the db if it exists.
*/
$data = file_get_contents('php://input');
$decodedData = json_decode($data);
print_r($decodedData);
$username="root";
$password="!Sparrtan1";
$database="Angular";
mysql_connect(localhost,$username,$password);
@mysql_select_db($database) or die( "Unable to select database");
mysql_close();