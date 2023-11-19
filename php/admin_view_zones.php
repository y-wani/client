<?php
// Not finished yet
// Should have a button for each zone that takes admin to view rates and reservations
// Should have a button for adding/removing zones

// Creating connection
// TODO: Change the username and password to admin
$conn = mysqli_connect("localhost", "root", "mysql", "PARKING");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// SQL query
$sql = "SELECT name, max_designated_spots from zone";

// Fetch data and display it in the table rows
$result = mysqli_query($conn, $sql);
if ($result) {
    echo "<table border='1'>
            <tr>
                <th>Zone Name</th>
                <th>Max Designated Spots</th>
                <th>Detail</th>
            </tr>";
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr>
                <td>{$row['name']}</td>
                <td>{$row['max_designated_spots']}</td>
                <td><!--should have a botton that takes admin to view rates and reservations--></td>
            </tr>";
    }
    echo "</table>";
} else {
    echo "Error querying: " . mysqli_error($conn);
}

// closing connection
mysqli_close($conn);
?>