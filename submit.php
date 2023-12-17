<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
    <center>
        <?php

        $url = "http://notably-alert-crane.ngrok-free.app/";
        // servername => localhost
        // username => root
        // password => empty
        // database name => Inputs
        $conn = mysqli_connect("localhost", "root", "", "Inputs");

        // Check connection
        if ($conn === false) {
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }

        // Taking all 5 values from the form data(input)
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];

        // Performing insert query execution
        // here our table name is college
        $sql = "INSERT INTO participants  VALUES ('$name', 
            '$email','$message')";

        if (mysqli_query($conn, $sql)) {
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";

            echo nl2br("\n$name\n$email\n$message");
        } else {
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }

        // Close connection
        mysqli_close($conn);
        header("Location: $url");
        ?>
    </center>
</body>

</html>