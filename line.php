<?php

ini_set('display_errors', 'On');
include "config.php";
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

       $query = "SELECT * FROM sama1";
       $result = $conn->query($query);

    $jsonArray = array();
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        $jsonArrayItem = array();
        $jsonArrayItem['label'] = $row['Name'];
        $jsonArrayItem['value'] = $row['Numberofstudents'];
        array_push($jsonArray, $jsonArrayItem);
      }
    }

      $conn->close();
      header('Content-type: application/json');
      echo json_encode($jsonArray);




?>