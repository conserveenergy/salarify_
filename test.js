// test.js
const arr = [//["organization/board", "job title", "qualification" "end date", "notification/website link"]
["Rajasthan Staff Selection Board (RSSB)","Animal Attendant","10th","17-02-2024","https://rsmssb.rajasthan.gov.in/Static/files/AA2023_Advert_06102023.pdf"],["AAI","Senior assistant","Diploma in Ectronics; Diploma in Telecommunications; Diploma in Radio Engineering; B.com; Degree with LMV licence","2024-10-01","https://cdn.digialm.com//per/g01/pub/726/EForms/image/ImageDocUpload/12/1115257132830397025754.pdf"],["AAI","junior assistant","12th; Diploma","2024-10-01","https://cdn.digialm.com//per/g01/pub/726/EForms/image/ImageDocUpload/12/1115257132830397025754.pdf"],["ECIL","Junior Technician","Chemical Engineering; Chemical Technology; Petrochemical Engineering; Petrochemical Technology; Mechanical Engineering; Electrical Engineering; Electrical Engineering; Electronics\nEngineering; Computer Science; Computer Engineering; Computer Technology; Information Science; Information Engineering; Information\nTechnology; Artificial Intelligence; Machine\nLearning; Data Science; Cyber Security; Internet-of-Things\n","16-01-2024","https://advt91.recttindia.in/Design/Advt.No.91.pdf"]
  ,["Oil India Ltd","Senior Officer (Petroleum)","PG (Petroleum Engineering / Technology)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Senior Geologist","PG (Geologist)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Senior Officer (Finance)","CA / ICWA / MBA (Finance)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Senior Officer (IT)","MCA / BE (IT) / B.Tech (CS)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Senior Officer (HR)","MBA (Personnel Management /HR/HRD/HRM )","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Senior Officer (HSE)*","Degree (Relevant Engg)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Confidential Secretary","Diploma/Degree (Relevant Discipline)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Superintending Engineer (Civil)","BE (Civil)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Superintending Engineer (Mechanical)","BE (Mechanical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Superintending Engineer (Electrical)","BE (Electrical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Superintending Engineer (Instrumentation)","BE (Instrumentation)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Medical Officer","MBBS","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Professor (English)","MA (English)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Professor (Geology)","M.Sc. (Geology)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Professor (Mechanical)","M.E. (Mechanical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Professor (Electrical)","M.E. (Electrical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Junior Engineer (Civil)","BE (Civil)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Junior Engineer (Mechanical)","BE (Mechanical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Junior Engineer (Electrical)","BE (Electrical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Junior Engineer (Instrumentation)","BE (Instrumentation)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Junior Officer (Geology)","M.Sc. (Geology)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Medical Officer (AYUSH)","BAMS / BHMS / BUMS","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Lecturer (English)","MA (English)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Lecturer (Geology)","M.Sc. (Geology)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Lecturer (Mechanical)","M.E. (Mechanical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Lecturer (Electrical)","M.E. (Electrical)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Executive (Technical)","Diploma in Civil; Mechanical; Electrical; Instrumentation","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Executive (Geology)","BSc. (Geology)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Assistant Executive (HSE)","Diploma (Relevant Engg)","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"],["Oil India Ltd","Staff Nurse","GNM / BSc. Nursing","30-01-2024","https://oilexecutive.cbtexamportal.in/assests/pdf/ADVERT.NO.EXRECT-2024-02(15%20positions-102-vacancies)doc-final.pdf"]
  ,["SAIL, Durgapur","Consultant (Chest Medicine)","MBBS with PG Degree/DNB in Chest Medicine / Respiratory Medicine / Pulmonology / Tuberculosis & Respiratory Disease / Tuberculosis & Chest Diseases / TB & Chest. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (Obs. & Gynae)","MBBS with PG Degree/DNB in Obstetrics & Gynaecology. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (Orthopaedics)","MBBS with PG Degree / DNB in Orthopaedics. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (Radiology)","MBBS with PG Degree / DNB in Medical Radio – Diagnosis / Radiology / Radio-Diagnosis. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (Surgery)","MBBS with PG Degree / DNB in Surgery / General Surgery / Traumatology & Surgery. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (Blood Bank)","MBBS with PG Degree / DNB in Transfusion Medicine / Immuno-Haematology & Transfusion Medicine. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (General Medicine)","MBBS with PG Degree / DNB in General Medicine / Medicine. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Consultant (Paediatrics)","MBBS with PG Degree / DNB in Paediatrics. plus 3 (three) years post qualification experience (after PG Degree/DNB) in recognized Medical College / Hospital / Institution.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Manager (Mechanical)","BE / B. Tech (full-time) in Mechanical Engg. from Govt. recognized University / Institution. plus 7 (seven) years post qualification experience (after B.E / B. Tech.) of at least in executive cadre in maintenance / troubleshooting of Hydraulics Systems and components such as Pumps, various types of hydraulic control valves and actuators in any Integrated Steel Plant.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Manager (Metallurgy)","BE / B. Tech (full-time) in Metallurgy Engg. from Govt. recognized University / Institution. plus 7 (seven) years post qualification experience (after B.E / B. Tech.) of at least in executive cadre in Converter/Caster Operation, Blast Furnace Operation in any Integrated Steel Plant.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Manager (Chemical)","BE / B. Tech (full-time) in Chemical Engg. from Govt. recognized University / Institution. plus 7 (seven) years post qualification experience (after B.E / B. Tech.) of at least in executive cadre in Coke Oven Operation in any Integrated Steel Plant.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Manager (Ceramics)","BE / B. Tech (full-time) in Ceramics Engg. from Govt. recognized University / Institution. plus 7 (seven) years post qualification experience (after B.E / B. Tech.) of at least in executive cadre in Refractory, Coke Oven Battery in any Integrated Steel Plant.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"],["SAIL, Durgapur","Manager (Mechanical) Projects","BE / B. Tech (full-time) in Mechanical Engg. from Govt. recognized University / Institution. plus minimum 7 (seven) years post qualification experience (after B.E / B. Tech.) of which at least 3 (three) years job experience in Projects and remaining span/duration of requisite job experience should be either in Projects or Mechanical maintenance of Production units in any Integrated Steel Plant.","30.01.2024","https://d1cmkr5tdoeyjk.cloudfront.net/sail/pdf/2023%20DSP%20Advertisement%20for%20Executive%20&%20Non-executive%20cadre.pdf"]
  ,["SAHITYA AKADEMI","Publication Assistant","Graduation (degree) or equivalent qualification from a recognised university or institution + Diploma in Printing or 5 years' experience in a printing press or publishing house + Knowledge of printing & book publication + Good knowledge of 1+ languages & literatures + Basic computer skills","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"],["SAHITYA AKADEMI","Sales-cum-Exhibition Assistant","Graduation (degree) or equivalent qualification from a recognised university or institution + 3 years' experience in sales & marketing + Good communication & interpersonal skills + Knowledge of computer applications","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"],["SAHITYA AKADEMI","Technical Assistant","Graduation (degree) or equivalent qualification in Science/Engineering/Computer Science + 3 years' experience in relevant field + Knowledge of computer applications","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"],["SAHITYA AKADEMI","Proof Reader cum General Assistant","Graduation (degree) or equivalent qualification from a recognised university or institution + 3 years' experience in proofreading & editing + Good knowledge of English & Hindi languages","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"],["SAHITYA AKADEMI","Receptionist cum Telephone Operator","12th pass with proficiency in English & Hindi languages + Good communication & interpersonal skills + Basic computer skills","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"],["SAHITYA AKADEMI","Junior Clerk","12th pass with proficiency in English & Hindi languages + Basic computer skills","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"],["SAHITYA AKADEMI","Multi Tasking Staff","10th pass","2024-02-04","https://sahitya-akademi.gov.in/pdf/VariousPosts-2024.pdf"]
  ,["NATIONAL COMPANY LAW APPELLATE TRIBUNAL","Law Research Associate (LRA)","Graduate in Law degree with a minimum of 50% marks, passed all law exams within the duration of your course, obtained Law Degree/LLM no earlier than two years ago, not enrolled in a postgraduate degree program, research and analytical skills, writing abilities, knowledge of legal research databases, good computer skills and knowledge of common software, knowledge of Company Law with IBC and Competition Law","2024-03-06","https://nclat.nic.in/sites/default/files/2023-12/Vacancy%20Circular%2013122023_LRA%20in%20NCLAT.pdf"]
  ,["Indian Oil Corporation Ltd.","Data Entry Operator(Fresher Apprentices)","12th","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"],["Indian Oil Corporation Ltd.","Domestic Data Entry Operator(Skill Certificate Holders)","12th","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"],["Indian Oil Corporation Ltd.","Trade Apprentice (Accountant)","Bachelors degree (Graduation) in Commerce","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"],["Indian Oil Corporation Ltd.","Trade Apprentice (AssistantHuman Resource","Bachelors degree (Graduation) in Commerce","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"],["Indian Oil Corporation Ltd.","Technician ApprenticeTelecommunication & Instrumentation","ITI in Electronics & Communication Engineering; ITI in Electronics & Telecommunication Engineering; ITI in Electronics & Radio Communication Engineering; ITI in Instrumentation & Control Engineering; ITI in Instrumentation & Process Control Engineering; ITI in Electronics Engineering","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"],["Indian Oil Corporation Ltd.","Technician ApprenticeElectrical","ITI in Electrical Engineering; ITI in Electrical & Electronics Engineering","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"],["Indian Oil Corporation Ltd.","Technician ApprenticeMechanical","ITI in Mechanical Engineering; ITI in Automobile Engineering","2024-01-01T18:30:00.000Z","https://iocl.com/admin/img/Apprenticeships/Files/fc443547757e4e70a59c9a7ee22c5025.pdf"]
  
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
