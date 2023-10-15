<?php


$data['name'] = $_POST['fistName'] . " " . $_POST['lastName'];
$data['email'] = $_POST['email'];
$data['message'] = $_POST['message'];


echo json_encode ($data);
exit;

?>