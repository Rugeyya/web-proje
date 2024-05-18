<?php
session_start();

// Post edilen verileri al
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifre doğrulaması
    if (!empty($username) && !empty($password)) {
        // Kullanıcı adını kontrol et
        if ($username === "g231210555@sakarya.edu.tr") {
            // Şifreyi kontrol et
            if ($password === "g231210555") {
                // Giriş başarılı
                $_SESSION['username'] = $username;
                header("Location: hakkımda.html");
                exit;
            } else {
                // Şifre hatalı
                header("Location: login.html");
                exit;
            }
        } else {
            // Kullanıcı adı hatalı
            header("Location: login.html");
            exit;
        }
    } else {
        // Kullanıcı adı veya şifre boş
        header("Location: login.html");
        exit;
    }
} else {
    // Post metoduyla gelmediyse yönlendir
    header("Location: login.html");
    exit;
}
?>
