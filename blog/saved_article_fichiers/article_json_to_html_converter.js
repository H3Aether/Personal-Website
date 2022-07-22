function getJsonFile(){
    var file_to_read = document.getElementById("jsonfileinput").files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
      var content = e.target.result;
      var intern = JSON.parse(content); // parse json 

    const div_to_remove = document.getElementById("removeme"); // Removing the div that was used to import the json file
    div_to_remove.remove();
    document.title = file_to_read.name.substring(0, file_to_read.name.length-5); // Setting the title of the page to the title of the json file

      intern.forEach(dict => { // Loop through the json file
        addElement(dict); // Display the content of the json file
      });
            };
    fileread.readAsText(file_to_read);
}

function addElement(dict) {
    var newDiv = document.createElement("div"); // Create a nex <div> element
    var newContent = document.createTextNode(dict.content); // Create a text node
    newDiv.appendChild(newContent); // Append the text to <div>
    newDiv.classList.add(dict.class); // Add the class to the <div>
    document.body.appendChild(newDiv); // Append <div> to the HTML document
}

document.getElementById("jsonfileinput").addEventListener("change", getJsonFile);