<?php

if(isset($_POST['submit'])) {
    $name = $_POST['first_name'];
    $lastname = $_POST['last_name'];
    $mailFrom = $_POST['email'];
    $mess = $_POST['comments'];
    $phone = $_POST['phone'];
 
    $mailTo = "prljickatarina@gmail.com";
    $headers = "Primili ste email od: ".$mailFrom;
    $message = "Primili ste e-mail od:\n" .
           "Ime: " . $name . "\n" .
           "Prezime: " . $lastname . "\n" .
           "Telefon: " . $phone . "\n" .
           "E-mail: " . $mailFrom . "\n" .
           "Poruka:\n" . $mess;

           $currentUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

           if (mail($mailTo, $headers, $message)) {
            
            $newUrl = substr($currentUrl, 0, strrpos($currentUrl, '/') + 1) . "contact.html?messageSent=true";

            header("Location: $newUrl");
                exit();
            } else {
                $contactUrl = substr($currentUrl, 0, strrpos($currentUrl, '/') + 1) . "contact.html?messageSent=false";
                            header("Location: $contactUrl");
            exit();
                print_r(error_get_last());
            }

}
else{
    header("Location:https://google.rs");
}
?>