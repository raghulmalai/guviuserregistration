<?php

//$db=$conn;
// fetch query
function fetch_data(){
    //include 'login.php';
    //$user = $userName;
    $con = mysqli_connect('localhost', 'root', '','user_login');
  $query="SELECT * from user";// WHERE username = 'rajanaren'";
  echo $query;
  $exec=mysqli_query($con, $query);
  if(mysqli_num_rows($exec)>0){
    $row= mysqli_fetch_all($exec, MYSQLI_ASSOC);
    return $row;  
        
  }else{
    return $row=[];
  }
}
$fetchData= fetch_data();
show_data($fetchData);
function show_data($fetchData){
 echo '<table border="1">
        <tr>
            <th>S.N</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>City</th>
            <th>Country</th>            
        </tr>';
 if(count($fetchData)>0){
      $sn=1;
      foreach($fetchData as $data){ 
  echo "<tr>
          <td>".$sn."</td>
          <td>".$data['username']."</td>
          <td>".$data['password']."</td>        
          
   </tr>";
       
  $sn++; 
     }
}else{
     
  echo "<tr>
        <td colspan='7'>No Data Found</td>
       </tr>"; 
}
  echo "</table>";
}
?>