<?php
include_once("db.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $textModule = mysqli_real_escape_string($mysqli, trim($request->textModule));
    $idCourse = mysqli_real_escape_string($mysqli, trim($request->idCourse));
    
    $sqlLesson = "INSERT INTO Modules (name, idCourse) VALUES ('$textModule', '$idCourse');";
    mysqli_query($mysqli, $sqlLesson);
}
?>
