<?php
include_once("db.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);
  $name = trim($request->name);
  $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
  $email = mysqli_real_escape_string($mysqli, trim($request->email));


  $chekEmailOnDouble = "SELECT * FROM ContactInformation WHERE (email = '$email')";
  $countRow = mysqli_query($mysqli, $chekEmailOnDouble);

  if(mysqli_num_rows($countRow) > 0)
  {
    http_response_code(404);
  }

  else
  {
    $sql = "INSERT INTO ContactInformation(fullName,number,email,birthday,password) VALUES ('$name',null,'$email',null,'$pwd')";

    mysqli_query($mysqli, $sql);

    $id = mysqli_insert_id($mysqli);

    $queryUsers = "INSERT INTO Users(idRole, idContactInfo) VALUES (3, '$id')";

    mysqli_query($mysqli, $queryUsers);

    if ($mysqli->query($sql) === TRUE) {
      $authdata = [
        'name' => $name,
        'pwd' => '',
        'email' => $email,
        'Id' => $id
      ];
      echo json_encode($authdata);
    }
  }
}

?>
