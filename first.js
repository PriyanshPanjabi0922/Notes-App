const noteTitle  =document.getElementById('title');
const noteDescription =document.getElementById('Description');
const addbtn = document.querySelector('button');


addbtn.addEventListener("click",(e)=>{
    
    const taskCard = document.getElementById('taskCard');
    e.preventDefault();

    const titleValue =document.createElement('div');
    const DescriotionValue =document.createElement('div');
    titleValue.textContent  = noteTitle.value;
    DescriotionValue.textContent =noteDescription.value;
    titleValue.id = "titleValue";
    DescriotionValue.id = "DescriotionValue";
    

    const noteContainer = document.createElement('div');
    const edit = document.createElement('button');
    edit.textContent = "Edit";
    edit.id = "editbtn";
    const Delete = document.createElement('button');
    Delete.textContent = "Delete";
    Delete.id ="Deletebtn";
    const contentContainer = document.createElement('div');
    contentContainer.id = "contentContainer";
    const buttonContainer = document.createElement('div');
    buttonContainer.id ="buttonContainer";
    noteContainer.className = "noteContainer";
    buttonContainer.append(edit,Delete);
    contentContainer.append(titleValue,DescriotionValue);

    noteContainer.append(buttonContainer,contentContainer);

Delete.addEventListener("click",(e)=>{
        noteContainer.remove();
    });

    taskCard.append(noteContainer);
});




