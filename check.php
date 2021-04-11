<?php
$host = "localhost";
$username = "root";
$password = "";
$databaseName = "coronavirus_final_tables";
$con = mysqli_connect($host,$username,$password,$databaseName);
if($con){
  ?>
  <script>
    console.log("Connection sucessfully")
  </script>
  <?php
}else{?>
  <script>
    console.log("Connection sucessfully")
  </script>
  <?php
  die("no connection".mysqli_connect_error());
}
?>