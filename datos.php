<?php


    switch($_GET['cliente']){
        case "1":
            echo '
                {
                    "nombre":"Luis Martin",
                    "email":"96luismartin@gmail.com",
                    "telefono":68795
                }
            ';
            break;
        case "2":
            echo '
                {
                    "nombre":"Jorge Perez",
                    "email":"jorgep98@gmail.com",
                    "telefono":99765
                }
            ';
            break;
        case "3":
            echo '
                {
                    "nombre":"Alba Rubio",
                    "email":"arubiof@gmail.com",
                    "telefono":11223
                }
            ';
            break;
    }

?>