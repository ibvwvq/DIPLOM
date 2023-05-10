<?php
include_once("db.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
  $email = mysqli_real_escape_string($mysqli, trim($request->username));
//$sql = "SELECT * FROM ContactInformation where email='$email' and password='$pwd'";
  $sql = "SELECT `fullName`, `number`, `email`, `birthday`, `password`,`idRole`, `idUser` FROM `ContactInformation` RIGHT JOIN `Users` ON `Users`.`idContactInfo` = `ContactInformation`.`idContactInformation`WHERE `ContactInformation`.`email` = '$email' AND `ContactInformation`.`password` = '$pwd'";

  if($result = mysqli_query($mysqli,$sql))
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
