<?php
select sum(Boardingstudents) as bod from sama2;//number of students in boarding section

select sum(Daystudents) as day from sama2;//nuber of students in day section

select sum(Numberofstudents) as day from sama2;//nuber of students

SELECT COUNT(Name) FROM sama2 WHERE YEAR(Date_school_enrolled) = 2009;//counting school from 2009-2017

select sum(O_level_students) as bod from sama2;//number of only Olevel students

select sum(A_level_students) as bod from sama2;//number of only alevel students
 ?>
