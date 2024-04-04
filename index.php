<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Tutorial</title>
</head>
<body>
    <p>Send Email</p>
    <form class="contact-form" action="contactform.php" method="post">
        <input type="text" name="name" placeholder="Full name">
        <input type="text" name="mail" placeholder="Your e-mail">
        <input type="text" name="subject" placeholder="Subject">
        <textarea name="message" placeholder="Message" rows="8" cols="80"></textarea>
        <button type="submit" name="Submit">SEND MESSAGE</button>
    </form>
</body>
</html>
