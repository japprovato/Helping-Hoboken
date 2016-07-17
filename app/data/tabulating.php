<?php
 $myfile = fopen("employees.txt", "r");
 echo fread($myfile, filesize("employees.txt"));
 fclose($myfile);




 ?>
