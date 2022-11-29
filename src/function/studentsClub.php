<?php
//get all students
function getAllStudents($db)
{
$sql = 'Select s.name, s.course, s.semester, s.email, s.clubId from student s ';
$sql .='Inner Join club c on s.clubId = c.clubId';
$stmt = $db->prepare ($sql);
$stmt ->execute();
return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

//get students by id
function getStudent($db, $studentsId)
{
$sql = 'Select s.name, s.course, s.semester, s.email, c.clubName as club from student s ';
$sql .= 'Inner Join club c on s.clubId = c.clubId ';
$sql .= 'Where s.studId = :studId';
$stmt = $db->prepare ($sql);
$id = (int) $studentsId;
$stmt->bindParam(':studId', $studentsId, PDO::PARAM_INT);
$stmt->execute();
return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

//add new student
function createStudent($db, $form_data) {
    $sql = 'Insert into student (name, course, semester, email, clubId) ';
    $sql .= 'values (:name, :course, :semester,  :email, :clubId)';
    $stmt = $db->prepare ($sql);
    $stmt->bindParam(':name', $form_data['name']);
    $stmt->bindParam(':course', $form_data['course']);
    $stmt->bindParam(':semester', ($form_data['semester']));
    $stmt->bindParam(':email', ($form_data['email']));
    $stmt->bindParam(':clubId', ($form_data['clubId']));
    $stmt->execute();
    return $db->lastInsertID();//insert last number.. continue
    }

//delete student by id
function deleteStudent($db,$studentsId) {
    $sql = ' Delete from student where studId = :studId';
    $stmt = $db->prepare($sql);
    $id = (int)$studentsId;
    $stmt->bindParam(':studId', $studentsId, PDO::PARAM_INT);
    $stmt->execute();
    }

    //update student by id
function updateStudent($db,$form_dat,$studentsId) {
    $sql = 'UPDATE student SET name = :name , course = :course , semester = :semester , email = :email , clubId = :clubId ';
    $sql .=' WHERE studId = :studId';
    $stmt = $db->prepare ($sql);
    $id = (int)$studentsId;
    $stmt->bindParam(':studId', $studentsId, PDO::PARAM_INT);
    $stmt->bindParam(':name', $form_dat['name']);
    $stmt->bindParam(':course', $form_dat['course']);
    $stmt->bindParam(':semester', ($form_dat['semester']));
    $stmt->bindParam(':email', ($form_dat['email']));
    $stmt->bindParam(':clubId', ($form_dat['clubId']));
    $stmt->execute();
    
   }