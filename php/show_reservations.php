<?php
if(isset($_GET['submit'])) {
    if(isset($_GET['phone_number'])) {
        $phone_number = $_GET['phone_number'];
        // Redirect to a page showing reservations of the user with the given phone number
        header("Location: reservations.php?phone_number=" . urlencode($phone_number));
        exit();
    }
}
?>
