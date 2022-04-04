/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function Course(name, lecture, location, recitation, rec_section, r_location, day, units, fce) {
  this.name = name;
  this.lecture = lecture;
  this.location = location;
  this.recitation = recitation;
  this.rec_section = rec_section;
  this.r_location = r_location;
  this.day = day;
  this.units = units;
  this.fce = fce;
}

var course_1 = new Course("Application Design & Development", "10:10- 11:30 AM (T Thu)", "NSH 1305", "1:30-3:00 PM", "A", "PH226A", "M", "12", "12");
var course_2 = new Course("Application Design & Development", "1:20- 2:40 PM (MW)", "NSH 1305", "1:30-3:00 PM", "A", "PH226A", "M", "12", "12");
// console.log(course_1);

function addNewItem() {
    let list = document.getElementByClassName("officialCourses");
    let itemInput = document.getElementById("text_input");
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function populateTable(){
	var table = "" ;
  var button = ""
  table += "<td>" 
      // + course_1.name +"</td>" 
      + course_1.lecture +"</td>" 
      + "<td>" + course_1.location +"</td>"
      + "<td>" + course_1.recitation +"</td>" 
      + "<td>" + course_1.rec_section +"</td>"
      + "<td>" + course_1.r_location +"</td>"
      + "<td>" + course_1.day +"</td>"
      + "<td>" + course_1.units +"</td>"
      + "<td>" + course_1.fce +"</td>"
      + "<td class='checkbox'>" 
      + `<button id="button-storage" onclick="addCourse('${course_1.name}', '${course_1.lecture}', '${course_1.units}')"></button>
        <p id="button-action-text"></p>`
      +"</td>";
  table += "</tr>";

  var table = "" ;
  var button = ""
  table += "<td>" 
      // + course_1.name +"</td>" 
      + course_2.lecture +"</td>" 
      + "<td>" + course_2.location +"</td>"
      + "<td>" + course_2.recitation +"</td>" 
      + "<td>" + course_2.rec_section +"</td>"
      + "<td>" + course_2.r_location +"</td>"
      + "<td>" + course_2.day +"</td>"
      + "<td>" + course_2.units +"</td>"
      + "<td>" + course_2.fce +"</td>"
      + "<td class='checkbox'>" 
      + `<button id="button-storage" onclick="addCourse('${course_2.name}', '${course_2.lecture}', '${course_2.units}')"></button>
        <p id="button-action-text"></p>`
      +"</td>";
  table += "</tr>";
	
	document.getElementById("result").innerHTML = table;
	document.getElementById("result2").innerHTML = table;

}

function RegisteredCourse(name, lecture, units) {
  this.name = name;
  this.lecture = lecture;
  this.units = units;
}

function addCourse(name, time, units) {
  var registered_course = new RegisteredCourse(name, time, units);
  console.log(registered_course);

  var table = "" ;

  table += "<td>" 
      + registered_course.name +"</td>" 
      + "<td>" + registered_course.lecture +"</td>"
      + "<td>" + registered_course.units +"</td>"
      + "<td class='checkbox'>" 
      + `<button id="button-storage" onclick="removeCourse('${registered_course.name}', '${registered_course.lecture}', '${registered_course.units}')"></button>
        <p id="button-action-text"></p>`
      +"</td>";
  table += "</tr>";
  
  document.getElementById("officialCourses").innerHTML = table;

  localStorage.setItem("registered_course", JSON.stringify(registered_course));
}

function removeCourse(name, lecture, units) {
  console.log("remove button click");
  var table = document.getElementById("officialCourses");

  table.innerHTML = ""
}

function onLoad() {
  populateTable();
  var registered_course = JSON.parse(localStorage.getItem("registered_course"));
  console.log(registered_course)
  var table = "" ;

  table += "<td>" 
      + registered_course.name +"</td>" 
      + "<td>" + registered_course.lecture +"</td>"
      + "<td>" + registered_course.units +"</td>"
      + "<td class='checkbox'>" 
      + `<button id="button-storage" onclick="removeCourse('${registered_course.name}', '${registered_course.lecture}', '${registered_course.units}')"></button>
        <p id="button-action-text"></p>`
      +"</td>";;
  table += "</tr>";
  
  document.getElementById("officialCourses").innerHTML = table;

}

// window.onLoad = function () {
//   onLoad();
// }

// function onLoad() {
//   var course = JSON.parse(localStorage.getItem("savedClass"));

//   var hasSavedCourse = false;

//   if (course == null) {
//     document.getElementById("button-storage").textContent = "Save Course";
//   }
//   else {
//     document.getElementById("button-storage").textContent = "Clear Course";
//     hasSavedCourse = true;
//   }

//   // document.getElementById("course-properties").textContext = course.name;
//   localStorage.getItem("savedCourse");

//   document.getElementById("button-storage").addEventListener("click", function() {
//     if (hasSavedCourse){
//       localStorage.removeItem("savedCourse");

//       document.getElementById("button-storage").style.dsplay = "none";
//       document.getElementById("button-action-text").textContent = "Cleared";
//       document.getElementById("button-action-text").style.display = "block";
//     }
//     else{
//       localStorage.setItem("savedCourse", JSON.stringify(course));

//       // if this button was clicked, hide button and show message to user
//       document.getElementById("button-storage").style.display = "none";
//       document.getElementById("button-action-text").textContent = "Saved!";
//       document.getElementById("button-action-text").style.display = "block";
//     }
//   });
//   var table = "" ;

//   table += "<td>" 
//       + course_1.name +"</td>" 
//       + "<td>" + course_1.lecture +"</td>"
//       + "<td>" + course_1.units +"</td>";
//   table += "</tr>";
  
//   document.getElementById("officialCourses").innerHTML = table;
    
// };

{/* <script>
  const items1 = [
    { date: "10/17/2018", name: "john doe" },
    { date: "10/18/2018", name: "jane doe" },
  ];
  const items2 = [
    { date: "10/17/2019", name: "john doe" },
    { date: "10/18/2019", name: "jane doe" },
  ];
  function loadTableData(items) {
    const table = document.getElementById("testBody");
    items.forEach( item => {
      let row = table.insertRow();
      let date = row.insertCell(0);
      date.innerHTML = item.date;
      let name = row.insertCell(1);
      name.innerHTML = item.name;
    });
  }
  loadTableData(items1);
  loadTableData(items2);
  loadTableData([]);
</script> */}