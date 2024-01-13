// test.js
const arr = [//["organization/board", "job title", "qualification" "end date", "notification/website link"]
["b1 lorem34","j1","q1","Ld1","link1","s1"],
["b2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, illo. hi hi hi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, illo.","j2","Aerospace Engineering;degree","Ld2","link2","s2"],
["b3","j3 Loremipsumdolor sit amet.","q3","Ld3","link3","s3"],
["b4","j4","q4","Ld4","link4","s4"],
["b5","j5","q5","Ld5","link5","s5"],
["b6","j6","q6","Ld6","link6","s6"],
["b7","j7","q7","Ld7","link7","s7"],
["b8","j8","q8","Ld8","link8","s8"],
["b9","j9","q9","Ld9","link9","s9"],
["b10","j10","q10","Ld10","link10","s10"],
["b1","j1","10th","Ld1","link1","s1"],["b2","j2","12th","Ld2","link2","s2"],["b3","j3","degree","Ld3","link3","s3"],["b4","j4","degree","Ld4","link4","s4"],["b5","j5","q5","Ld5","link5","s5"],["b6","j6","q6","Ld6","link6","s6"],["b7","j7","q7","Ld7","link7","s7"],["b8","j8","q8","Ld8","link8","s8"],["b9","j9","q9","Ld9","link9","s9"],["b10","j10","q10","Ld10","link10","s10"],
["b1","j1","q1","Ld1","https://chat.openai.com/c/a16f9284-9b3b-4595-8d55-84ce20dc0f8d","s1"]

];

var qualificationarr = []

for(i=0;i<arr.length;i++){
    qualificationarr.push(arr[i][2])
}


const resultArray = qualificationarr.flatMap(element => element.split(/[,;]/));

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