<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $mess = $_POST['message'];
    $mailTo = "prljickatarina@gmail.com";
    $headers = "From: ".$mailFrom;
    $message = "You recieved e-mail from ".$name.".\n\n".$mailFrom.".\n\n".$mess;
    mail($mailTo, $headers, $message);
    header("Location:https://vikendnaseljevinciusije.rs/#");
}

?>