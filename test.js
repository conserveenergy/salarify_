// test.js
const arr = [//["organization/board", "job title", "qualification" "end date", "notification/website link"]
["Rajasthan Staff Selection Board (RSSB)","Animal Attendant","10th","17-02-2024","https://rsmssb.rajasthan.gov.in/Static/files/AA2023_Advert_06102023.pdf"],["AAI","Senior assistant","Diploma in Ectronics; Diploma in Telecommunications; Diploma in Radio Engineering; B.com; Degree with LMV licence","2024-10-01T18:30:00.000Z","https://cdn.digialm.com//per/g01/pub/726/EForms/image/ImageDocUpload/12/1115257132830397025754.pdf"],["AAI","junior assistant","12th; Diploma","2024-10-01T18:30:00.000Z","https://cdn.digialm.com//per/g01/pub/726/EForms/image/ImageDocUpload/12/1115257132830397025754.pdf"],["ECIL","Junior Technician","Chemical Engineering; Chemical Technology; Petrochemical Engineering; Petrochemical Technology; Mechanical Engineering; Electrical Engineering; Electrical Engineering; Electronics\nEngineering; Computer Science; Computer Engineering; Computer Technology; Information Science; Information Engineering; Information\nTechnology; Artificial Intelligence; Machine\nLearning; Data Science; Cyber Security; Internet-of-Things\n","16-01-2024","https://advt91.recttindia.in/Design/Advt.No.91.pdf"]
    
];

var qualificationarr = []

for(i=0;i<arr.length;i++){
    qualificationarr.push(arr[i][2])
}


const resultArray = qualificationarr.flatMap(element => element.split(/[,; ]/));

function removeDuplicates(resultArray) {
    // Use Set to store unique elements
    const uniqueSet = new Set(resultArray);
  
    // Convert Set back to an resultArray
    const uniqueArray = [...uniqueSet];
  
    return uniqueArray;
  }
  
//   const originalArray = [1, 2, 2, 3, 4, 4, 5];
  const newArray = removeDuplicates(resultArray);
  

  
var opv = ``
for(i=0;i<newArray.length;i++){
    
    opv += `<option value="${newArray[i]}">
    `
}

document.getElementById("optionsList").innerHTML=opv


var qualificationArray=["10","12","degree"]

const arrLength = arr.length;
let data = `<tr class="head">
                <td>${"Board"}</td>
                <td>${"Job title"}</td>
                <td>${"Qualification"}</td>
                <td>${"Last date"}</td>
                <td>${"Notification"}</td>
            </tr>`
                ;

for (let i = 0; i < arrLength; i++) {
    data += `<tr>
                <td>${arr[i][0]}</td>
                <td>${arr[i][1]}</td>
                <td>${arr[i][2]}</td>
                <td>${arr[i][3]}</td>
                <td><a href=${arr[i][4]} target="_blank">click here</a></td>
                </tr>`;
}

document.getElementById("AlljobsTable").innerHTML = data;


function class10jobs(){
    let a = [];
    for(i=0;i<arrLength;i++){
        var wordpresence = arr[i][2]
        if(wordpresence.includes("10th")){
            a.push(i)
        }
    };

    data10 =`<tr class="head">
    <td>${"Organization"}</td>
    <td>${"Job title"}</td>
    <td>${"Last date"}</td>
    <td>${"Notification"}</td>
    </tr>`
    ;
    b=a.length;
    for(i=0;i<b;i++){
        j=a[i];
        data10 += `<tr>
        <td>${arr[j][0]}</td>
        <td>${arr[j][1]}</td>
        <td>${arr[j][3]}</td>
        <td><a href=${arr[j][4]} target="_black">click here</a></td>
    </tr>`;
    }
    document.getElementById("class10jobs").innerHTML=data10;
    document.getElementById("class10jobsdiv").style="display=block"
}

function hideDivs(i){
    let edQaulifcatn=["10","12","degree"]
    if(edQaulifcatn[i]==="10"){
        document.getElementById("class12jobsdiv").style.display="none"
        document.getElementById("degreejobsdiv").style.display="none"
        document.getElementById("searchingjobsdiv").style.display="none"
    }else if(edQaulifcatn[i]==="12"){
        document.getElementById("degreejobsdiv").style.display="none"
        document.getElementById("searchingjobsdiv").style.display="none"
    }else if(edQaulifcatn[i]==="degree"){
        document.getElementById("searchingjobsdiv").style.display="none"
    }
}

function class12jobs(){
    let a = [];
    for(i=0;i<arrLength;i++){
        var wordpresence = arr[i][2]
        if(wordpresence.includes("12th")){
            a.push(i)
        }
    };

    

    data12 =`<tr class="head">
    <td>${"Organization"}</td>
    <td>${"Job title"}</td>
    <td>${"Last date"}</td>
    <td>${"Notification"}</td>
    </tr>`
    ;
    b=a.length;
    for(i=0;i<b;i++){
        j=a[i];
        data12 += `<tr>
        <td>${arr[j][0]}</td>
        <td>${arr[j][1]}</td>
        <td>${arr[j][3]}</td>
        <td><a href=${arr[j][4]} target="_black">click here</a></td>
        </tr>`;
    }
    document.getElementById("class12jobs").innerHTML=data12;
    document.getElementById("class12jobsdiv").style="display=block"

    class10jobs()
}


function degreejobs(){
    let a = [];
    for(i=0;i<arrLength;i++){
         var wordpresence = arr[i][2]
        if(wordpresence.includes("degree")){
            a.push(i)
        }
    };

    datadegree =`<tr class="head">
    <td>${"Organization"}</td>
    <td>${"Job title"}</td>
 
    <td>${"Last date"}</td>
    <td>${"Notification"}</td>
    
    </tr>`
    ;
    b=a.length;
    for(i=0;i<b;i++){
        j=a[i];
        datadegree += `<tr>
        <td>${arr[j][0]}</td>
        <td>${arr[j][1]}</td>
        <td>${arr[j][3]}</td>
        <td><a href=${arr[j][4]} target="_black">click here</a></td>
    </tr>`;
    }
    document.getElementById("degreejobs").innerHTML=datadegree;
    document.getElementById("degreejobsdiv").style="display=block"
    class12jobs()
}

// Get the input field and the span to display the selected option
const inputField = document.getElementById('optionInput');
const selectedOptionSpan = document.getElementById('selectedOption');

// Add an event listener to the input field to listen for changes
inputField.addEventListener('input', function() {
  // Set the value of the selected option span to the value of the input field
  selectedOptionSpan.textContent = inputField.value;
  let alpha = inputField.value
  
  document.getElementById("searchbutton").innerHTML= `<button onclick="searchDegree( '${alpha}' )" class="searchbtn">Search</button>`
  
});





const sel= document.getElementById("selectedOption").innerText




function searchDegree(sel){
    document.getElementById("searchingjobs").innerHTML=``
    let a = [];
    for(i=0;i<arrLength;i++){
        var wordpresence = arr[i][2]
        if(wordpresence.includes(sel)){
            a.push(i)
        }
    };

    datadegree =`<tr class="head">
    <td>${"Organization"}</td>
    <td>${"Job title"}</td>
    <td>${"Last date"}</td>
    <td>${"Notification"}</td>
    </tr>`
    ;
    b=a.length;
    for(i=0;i<b;i++){
        j=a[i];
        datadegree += `<tr>
        <td>${arr[j][0]}</td>
        <td>${arr[j][1]}</td>
        <td>${arr[j][3]}</td>
        <td><a href=${arr[j][4]} target="_black">click here</a></td>
    </tr>`;
    }
    document.getElementById("searchingjobs").innerHTML=datadegree;
    document.getElementById("searchingjobsdiv").style="display=block"
    degreejobs()
    document.getElementById("nameofthefield").innerText=sel
    document.getElementById("optionInput").value=''
}
