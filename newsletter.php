<?php
    $referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';

if(isset($_POST['submit'])) {
    // Pročitajte vrednost iz skrivenog input polja "podaci_iz_tabele"
    $email = $_POST["email"];

    $mailTo = "prljickatarina@gmail.com";


$subject = "PRETPLATA NA NEWSLETTER";

  $headers = array(
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "From: ${email}",
    "Reply-To: ${email}"
);
$headers = implode("\r\n", $headers);

$message = "EMAIL:  {$email} se pretplatio na newsletter.";


if (mail($mailTo, $subject, $message, $headers)) {
            
    header("Location: ${referer}?newsletterSuccess=true");

        exit();
    } else {
        header("Location: ${referer}?newsletterSuccess=false");

    exit();
        //echo "mail send ... ERROR!";
        print_r(error_get_last());
    }

mail($mailTo, $subject, $message, $headers);
        header("Location: ${referer}?newsletterSuccess=true");

}
?>