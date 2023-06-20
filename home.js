var selectRow=null;


function onSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    var sugarData = readData();
    if (selectRow === null) {
      insertData(sugarData);
    }
    resetForm();
  }

  function resetForm() {
    document.getElementById('glu-units').value = '';
    document.getElementById('check-date').value = '';
  }
  
  function validateForm() {
    var gluUnits = document.getElementById('glu-units').value;
    var checkDate = document.getElementById('check-date').value;
    if (gluUnits === '') {
      alert('Please enter glucose units.');
      return false;
    }
  
    if (checkDate === '') {
      alert('Please enter a date.');
      return false;
    }
  
    return true; 
  }
  

function readData(){
    var sugarData={};
    sugarData['glu-units']=document.getElementById('glu-units').value;
    sugarData['check-date']=document.getElementById('check-date').value;
    return sugarData;
}

function insertData(data){
    var result = document.getElementById('Result').getElementsByTagName('tbody')[0];
    var newResult = result.insertRow(result.length);
    var date = newResult.insertCell(0);
        date.innerHTML = data['check-date'];
    var value = newResult.insertCell(1);
        value.innerHTML = data['glu-units'];
    var analysis = newResult.insertCell(2);
    if (data['glu-units'] >= 131) {
        analysis.innerHTML = 'HIGH';
        newResult.style.backgroundColor = 'red';
      } else if(data['glu-units'] >= 111 && data['glu-units'] <= 130){
        analysis.innerHTML = 'MEDIUM';
        newResult.style.backgroundColor = '#daab05';
      }
      else if(data['glu-units'] >= 70 && data['glu-units'] <= 110) {
        analysis.innerHTML = 'NORMAL';
        newResult.style.backgroundColor = 'green';
      }
      else {
        analysis.innerHTML = 'LOW';
        newResult.style.backgroundColor = 'red';
      }
      var edit = newResult.insertCell(3);
      var icon = document.createElement("i");
      icon.className = "fa-sharp fa-solid fa-pen-to-square";
      icon.style.color = "#ffffff";
      icon.style.cursor= "pointer";
      icon.id = "icon";
      edit.appendChild(icon);
      icon.addEventListener("click", function() {
        document.querySelector(".popup").style.display = "flex";
        document.querySelector('.close').addEventListener("click",function(){
          document.querySelector('.popup').style.display="none";
        })
      })
      var delt = newResult.insertCell(4);
      var trashIcon = document.createElement("i");
      trashIcon.className = "fa-solid fa-trash";
      trashIcon.style.color = "#ffffff";
      trashIcon.style.cursor= "pointer";
      delt.appendChild(trashIcon);

      var popDate = document.getElementById('pop-date');
          popDate.innerHTML=data['check-date'];

      var popGLu = document.getElementById('aly');
          // popGLu.innerHTML=data['glu-units'];
          if(data['glu-units'] >131){
            popGLu.innerHTML = 'HIGH'
            popGLu.style.backgroundColor='Red'
            popGLu.color = 'rgb(252, 255, 240)'
          }
          else if(data['glu-units'] >= 111 && data['glu-units'] <= 130){
            popGLu.innerHTML = 'MEDIUM'
            popGLu.style.backgroundColor='#daab05'
            popGLu.color = 'rgb(252, 255, 240)'
          }
         else if(data['glu-units'] >= 70 && data['glu-units'] <= 110){
            popGLu.innerHTML = 'NORMAL'
            popGLu.style.backgroundColor='green'
            popGLu.color = 'rgb(252, 255, 240)'
          }
          else{
            popGLu.innerHTML = 'LOW'
            popGLu.style.backgroundColor='Red'
            popGLu.color = 'rgb(252, 255, 240)'
          }
          
          
}
 function handleOnChange(x){
  if(x>=131){
    var changedGlu = document.getElementById('aly')
        changedGlu.innerHTML = 'HIGH'
        changedGlu.style.backgroundColor='Red'
        changedGlu.color = 'rgb(252, 255, 240)'
  }
  else if(x>=111 && x<=130){
    var changedGlu = document.getElementById('aly')
        changedGlu.innerHTML = 'MEDIUM'
        changedGlu.style.backgroundColor='#daab05'
        changedGlu.color = 'rgb(252, 255, 240)'
  }
  else if(x>=70 && x<=110 ){
    var changedGlu = document.getElementById('aly')
        changedGlu.innerHTML = 'NORMAL'
        changedGlu.style.backgroundColor='green'
        changedGlu.color = 'rgb(252, 255, 240)'
  }
  else{
    var changedGlu = document.getElementById('aly')
        changedGlu.innerHTML = 'LOW'
        changedGlu.style.backgroundColor='Red'
        changedGlu.color = 'rgb(252, 255, 240)'
  }
}


document.getElementById('Glucose').addEventListener('submit', onSubmit);