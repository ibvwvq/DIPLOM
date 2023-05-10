<?php
include_once("db.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

<<<<<<< HEAD
  $nameCourse = trim($request->nameCourse);
  $descriptionCourse = mysqli_real_escape_string($mysqli, trim($request->descriptionCourse));
  $idUser= mysqli_real_escape_string($mysqli, trim($request->idUser));

  $sqlCreateCourse = "INSERT INTO Courses (name, description) VALUES ('$nameCourse', '$descriptionCourse')";

  mysqli_query($mysqli, $sqlCreateCourse);
  $idCourse = mysqli_insert_id($mysqli);
 $sqlNewConn = "INSERT INTO ConnectionsBetweenUsersAndCourses (idUser, idCourse) VALUES ('$idUser', '$idCourse')";
 mysqli_query($mysqli, $sqlNewConn);
}

=======
  $nameCourse = mysqli_real_escape_string($mysqli, trim($request->nameCourse));
  $descriptionCourse = mysqli_real_escape_string($mysqli, trim($request->descriptionCourse));
  $idUser= mysqli_real_escape_string($mysqli, trim($request->idUser));



  $sqlCreateCourse = "INSERT INTO `Courses` (`name`, `description`) VALUES ('$nameCourse', '$descriptionCourse')";

  mysqli_query($mysqli, $sqlCreateCourse);
  $idCourse = mysqli_insert_id($mysqli);
  $sqlNewConn = "INSERT INTO `ConnectionsBetweenUsersAndCourses` (`idUser`, `idCourse`) VALUES ('$idUser', '$idCourse')";
  mysqli_query($mysqli, $sqlNewConn);
}


>>>>>>> de4cc438dd8fdea1b5063ee9557d4be0dc0a3697
?>
