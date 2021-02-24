<?php
require 'check.php';
$NAME = $_POST['username'];
$EMAIL = $_POST['useremail'];
$MESSAGE = $_POST['message'];

$sql = "INSERT INTO thankyouformdata(NAME,EMAIL_ID,MESSAGE) VALUES('$NAME','$EMAIL','$MESSAGE')";
if(!mysqli_query($con,$sql)){
  // echo "Entered.";
  ?>
  <script>
    
  </script>
  <?php
}else{
  // echo "not Entered.";
}
use PHPMailer\PHPMailer\PHPMailer;
// $NAME = $_POST['username'];
// $EMAIL = $_POST['useremail'];
$SUBJECT = 'Thanks for supporting us.(Dont reply)';
$BODY = '<div style="text-align: center;">
        <h1>Thanks For Your response</h1>
        <h2>We are always there to get you uptodate about Corona Virus/Covid-19</h2>
        <img src="https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            width="100%">

        <h2>If You want health checkup then please visite
            <a href="https://localhost/Corona%20Tracker%20Website/doctor-appointment.html">doctor-appointment</a>
        </h2>
        <br>
        <hr>
        <div style="background-color: rgb(31, 30, 30); color: white;">
            <h4>We are wishing all be safe and take care of your health</h4>

            <h6>
                copyright &copy; to our corona virus tracker group <br>harshkumar Vishwakarma <br>Surajit Mondal
                <br>Aditiya Dixit
            </h6>
        </div>
    </div>';

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
  header("refresh:1; url= index.html");
} else {
  $status = "failed";
  $response = "Something is wrong: <br><br>";
  header("refresh:1; url= index.html");
}
exit(json_encode(array("status" => $status, "response" => $response)));

?>