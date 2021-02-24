<?php
use PHPMailer\PHPMailer\PHPMailer;
require 'check.php';
$NAME = $_POST['username'];
$EMAIL = $_POST['useremail'];
$MOBILE = $_POST['mobile'];
$sym = $_POST['sym'];
$EXTRA = $_POST['message'];
$AGE = $_POST['age'];
$chk = "";
$id;
$DoctorApp = rand(1,19);
foreach($sym as $chk1){
  $chk .= $chk1.",";
}
if(strlen($MOBILE) > 10 || strlen($MOBILE) < 10){
  ?>
  <script>
    alert("Invalid Number")
  </script>
  <?php
  header("refresh:0; url= doctor-appointment.html");
}else{
  date_default_timezone_set('Asia/Kolkata'); 
$DATE=date("d-m-y",strtotime("+1 day"));
$TIME=date("H:i:s");


$sql = "INSERT INTO `doctorappointment`(`user_name`, `user_email`, `user_symptom`, `user_phone_number`, `user_age`, `user_extra_information`, `date_appointed`, `time_appointed`)
VALUES ('$NAME','$EMAIL','$chk','$MOBILE','$AGE','$EXTRA','$DATE','$TIME')";
if(!mysqli_query($con,$sql)){
  // echo "Entered.";
  ?>
  <script>
    alert("Appointment NOT Booked Please Retry.");
  </script>
  <?php
}else{
  // echo "Entered.";
  $id = mysqli_insert_id($con);
  echo $id;
  ?>
  <script>
     alert("Appointment Booked.");
  </script>
  <?php
}

$finalData = "INSERT INTO `appointment_details`(`C_ID`, `D_ID`, `Appointment_Date`, `Appointment_Time`) 
VALUES ('$id','$DoctorApp','$DATE','$TIME')";
if(!mysqli_query($con,$finalData)){
  echo "Not Entered.";
  ?>
  <script>
    // alert("Appointment NOT Booked Please Retry.");
  </script>
  <?php
}else{
  echo "Entered.";
  ?>
  <script>
    //  alert("Appointment Booked.");
  </script>
  <?php
}
// sending mail

$SUBJECT = 'Doctor Appointment(don\'t reply)';

// making body of email
$BODY_FRONT = '<div style="text-align: center;">
        <h1>Your Appointment is Successfully Registered</h1>
        <h2>Our Doctor are always there for you can take personal prescription </h2>
        <br>
        Details for Your Appointment:
        <br>
        ';

$BODY_MIDDLE = 'Name: '.$NAME.'<br> Age: '.$AGE.'<br> Appointment Time: '.$TIME.'<br> Appointment Date: '.$DATE;
$BODY_BACK = '<hr>
        <div style="background-color: rgb(31, 30, 30); color: white;">
            <h4>We are wishing all be safe and take care of your health</h4>

            <h6>
                copyright &copy; to our corona virus tracker group <br>harshkumar Vishwakarma <br>Surajit Mondal
                <br>Aditiya Dixit
            </h6>
        </div>
    </div>';

$BODY = $BODY_FRONT . $BODY_MIDDLE . $BODY_BACK;
require_once "PHPMailer/PHPMailer.php";
require_once "PHPMailer/SMTP.php";
require_once "PHPMailer/Exception.php";
$mail = new PHPMailer();

//SMTP Settings
$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Username = "coronatracker.doctorappointment@gmail.com";
$mail->Password = 'harshaditiyasurajit141721';
$mail->Port = 587; //587
$mail->SMTPSecure = "tls"; //tls
//Email Settings
$mail->isHTML(true);
$mail->setFrom($EMAIL, 'CoronaVirus Tacker Team');
$mail->addAddress($EMAIL);
$mail->Subject = $SUBJECT;
$mail->Body = $BODY;

if ($mail->send()) {
  $status = "success";
  $response = "Email is sent!";
} else {
  $status = "failed";
  $response = "Something is wrong: <br><br>";
}
header("refresh:0; url= index.html");
exit(json_encode(array("status" => $status, "response" => $response)));
}
// Entering into data in database

?>