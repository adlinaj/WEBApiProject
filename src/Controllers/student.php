<?php
use Slim\Http\Request; //namespace
use Slim\Http\Response; //namespace

include __DIR__ . '/../function/studentsClub.php';

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

//read table students
$app->get('/students', function (Request $request, Response $response, array $arg){
 return $this->response->withJson(array('data' => 'success'), 200);
});
// read all data from table students
$app->get('/allstudents',function (Request $request, Response $response, 
array $arg)
{
 $data = getAllstudents($this->db);
if (is_null($data)) {
 return $this->response->withHeader('Access-Control-Allow-Origin', '*')->withJson(array('error' => 'no data'), 404);
}
return $this->response->withJson(array('data' => $data), 200);
});

//request table students by condition (student id)
$app->get('/students/[{studId}]', function ($request, $response, $args){
 
    $studentsId = $args['studId'];
    if (!is_numeric($studentsId)) {
    return $this->response->withJson(array('error' => 'numeric paremeter required'), 500);
    }
    $data = getStudent($this->db,$studentsId);
    if (empty($data)) {
    return $this->response->withJson(array('error' => 'no data'), 500);
   }
    return $this->response->withJson(array('data' => $data), 200);
   });

//add new students
$app->post('/student/add', function ($request, $response, $args) {
    $form_data = $request->getParsedBody();
    $data = createStudent($this->db, $form_data);
    if ($data <= 0) {
    return $this->response->withJson(array('error' => 'add data fail'), 500);
    }
    return $this->response->withJson(array('add data' => 'success'), 200);
    }
   );


//delete row
$app->delete('/students/del/[{studId}]', function ($request, $response, $args){
 
    $studentsId = $args['studId'];
   if (!is_numeric($studentsId)) {
    return $this->response->withJson(array('error' => 'numeric paremeter required'), 422);
   }
   $data = deleteStudent($this->db,$studentsId);
   if (empty($data)) {
   return $this->response->withJson(array($studentsId=> 'is successfully deleted'), 202);};
   });


   //put table products
   $app->put('/students/put/[{studId}]', function ($request, $response, $args){
    $studentsId = $args['studId'];
    
   if (!is_numeric($studentsId)) {
    return $this->response->withJson(array('error' => 'numeric paremeter required'), 422);
   }
    $form_dat=$request->getParsedBody();
    
   $data=updateStudent($this->db,$form_dat,$studentsId);
   if ($data <=0)
   return $this->response->withJson(array('data' => 'successfully updated'), 200);
});
