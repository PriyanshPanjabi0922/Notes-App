const noteTitle  =document.getElementById('title');
const noteDescription =document.getElementById('Description');
const addbtn = document.querySelector('button');


    function renderEditMode(title,Description,noteContainer){
            noteContainer.innerHTML = "";

            const input = document.createElement('input');
            const textarea = document.createElement('textarea');

            input.value = title;
            textarea.value = Description;

            const savebtn = document.createElement('button');
            const cancelbtn = document.createElement('button');

            savebtn.textContent = "Save";
            cancelbtn.textContent = "Cancel";

            savebtn.addEventListener("click",(e)=>{
                renderviewMode(input.value,textarea.value,noteContainer);
            });

            cancelbtn.addEventListener("click",(e)=>{
                renderviewMode(title,Description,noteContainer);
            });

            noteContainer.append(input,textarea,savebtn,cancelbtn);

    }

    function renderviewMode(title,Description,noteContainer) {

        noteContainer.innerHTML = "";
        const TitleDiv = document.createElement('div');
        const TextareaDiv = document.createElement('div');

        TitleDiv.textContent  =title;
        TextareaDiv.textContent = Description;

        const divEditbtn = document.createElement('button');
        divEditbtn.textContent = "Edit";
        divEditbtn.id = "divEditbtn";

         const divDeletebtn  =document.createElement('button');
        divDeletebtn.textContent = "Delete";
        divDeletebtn.id = "divDeletebtn";

        divEditbtn.addEventListener("click",(e)=>{
           
            renderEditMode(title,Description,noteContainer);
        })


        divDeletebtn.addEventListener("click",(e)=>{
            e.preventDefault();
            noteContainer.remove();
        })

        noteContainer.append(TitleDiv,TextareaDiv,divEditbtn,divDeletebtn);
    }


addbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const taskCard = document.getElementById('taskCard');
    

    const titleValue =document.createElement('div');
    const DescriptionValue =document.createElement('div');
    titleValue.textContent  = noteTitle.value;
    DescriptionValue.textContent =noteDescription.value;
    titleValue.id = "titleValue";
    DescriptionValue.id = "DescriotionValue";
    

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
    contentContainer.append(titleValue,DescriptionValue);

    const save = document.createElement('button');
        save.id = "savebtn";
        save.textContent = "Save";
    const cancel = document.createElement('button');
        cancel.id = "cancelbtn";
        cancel.textContent = "Cancel";


          save.addEventListener("click",(e)=>{
            e.preventDefault();


            const saveInput = document.createElement('div');
            const saveTextarea = document.createElement('div');
            const savedContentContainer = document.createElement('div');

            saveInput.textContent =input.value ;
            saveInput.id = "saveInput";  
            saveTextarea.textContent =textarea.value ;
            saveTextarea.id = "saveTextarea";

            savedContentContainer.append(saveInput,saveTextarea);

            const newEditbtn = document.createElement('button');
            newEditbtn.id = "newEditbtn";
            newEditbtn.textContent = "Edit";

            const newDeletebtn = document.createElement('button');
            newDeletebtn.id  ="newDeletebtn";
            newDeletebtn.textContent = "Delete";

            const newEditButtonContainer = document.createElement('div');
            newEditButtonContainer.id = "newEditButtonContainer";
            newEditButtonContainer.append(newEditbtn,newDeletebtn);

            noteContainer.append(savedContentContainer);
            noteContainer.append(newEditButtonContainer);

            renderviewMode();
 
    });

    cancel.addEventListener("click",(e)=>{
        e.preventDefault();



        const oldTitle = document.createElement('div');
        oldTitle.id = "oldTitle";
        const oldDiscription = document.createElement('div');
        oldDiscription.id = "oldDiscription";
        const oldDataContainer = document.createElement('div');

        oldTitle.textContent = storeTitleValue;
        oldDiscription.textContent = storeDescriptionValue;

        oldDataContainer.append(oldTitle,oldDiscription);
        oldDataContainer.id  = "oldDataContainer";
        
        const oldEditbtn = document.createElement('button');
        oldEditbtn.id = "oldEditbtn";
        oldEditbtn.textContent = "Edit";

        const oldDeletebtn = document.createElement('button');
        oldDeletebtn.id = "oldDeletebtn";
        oldDeletebtn.textContent = "Delete";

        const oldbtnContainer = document.createElement('div');
        oldbtnContainer.id = "oldbtnContainer";

        oldbtnContainer.append(oldEditbtn,oldDeletebtn);
        noteContainer.append(oldDataContainer,oldbtnContainer);

        renderviewMode(oldTitle,oldDiscription,noteContainer);

     
    });

    
    Delete.addEventListener("click",(e)=>{
        e.preventDefault();
        noteContainer.remove();

          });

    renderviewMode(noteTitle.value,noteDescription.value,noteContainer);
     taskCard.append(noteContainer);
    });
