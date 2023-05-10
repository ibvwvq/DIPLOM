<?php
include_once("db.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$idUser = mysqli_real_escape_string($mysqli, trim($request->idUser));
$sqlCourses = "SELECT ConnectionsBetweenUsersAndCourses.idCourse, name, description FROM ConnectionsBetweenUsersAndCourses LEFT JOIN Courses ON ConnectionsBetweenUsersAndCourses.idCourse = Courses.idCourse WHERE ConnectionsBetweenUsersAndCourses.idUser='$idUser'";

if($result = mysqli_query($mysqli,$sqlCourses))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
    http_response_code(404);
}
}
?>
