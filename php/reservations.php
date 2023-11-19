<?php
if (isset($_GET['phone_number'])) {
    $phone_no = $_GET['phone_number'];

    // Creating connection
    // TODO: Change the username and password to guest
    $conn = mysqli_connect("localhost", "root", "mysql", "PARKING");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Check if the user exists
    $sql = "select * from Customer where phone_no = '$phone_no'";
    if (mysqli_query($conn, $sql) -> num_rows == 0) {
        echo "No user with phone number $phone_no found.";
    } else {
        $sql = "select concat(u.fname, ' ', u.lname) as name, r.phone_no, r.zone, r.date, r.confirmation_no,
        if(r.is_cancelled = 1, 'Cancelled', '') as status
        from reservation as r join customer as u on r.phone_no = u.phone_no
        where r.phone_no = '$phone_no'";

        // Fetch data and display it in the table rows
        $result = mysqli_query($conn, $sql);
        if ($result) {
            echo "<table border='1'>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Zone</th>
                <th>Date</th>
                <th>Confirmation#</th>
                <th>Status</th>
            </tr>";
            while ($row = mysqli_fetch_array($result)) {
                echo "<tr>
                <td>{$row['name']}</td>
                <td>{$row['phone_no']}</td>
                <td>{$row['zone']}</td>
                <td>{$row['date']}</td>
                <td>{$row['confirmation_no']}</td>
                <td>{$row['status']}</td>
            </tr>";
            }
            echo "</table>";
        } else {
            echo "Error querying: " . mysqli_error($conn);
        }
    }
    // closing connection
    mysqli_close($conn);
}
?>