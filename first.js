const noteTitle  =document.getElementById('title');
const noteDescription =document.getElementById('Description');
const addbtn = document.querySelector('button');


    function renderEditMode(title,Description,noteContainer){
        
            noteContainer.innerHTML = "";

            noteContainer.classList.add("edit-mode");

            const contentContainer = document.createElement('div');
            
            contentContainer.className = "contentContainer";

            const buttonContainer =document.createElement('div');
            buttonContainer.className = "buttonContainer";
            const input = document.createElement('input');
            const textarea = document.createElement('textarea');

            input.value = title;
            textarea.value = Description;

            const savebtn = document.createElement('button');
            const cancelbtn = document.createElement('button');

            savebtn.textContent = "Save";
            savebtn.id = "savebtn";
            cancelbtn.textContent = "Cancel";
            cancelbtn.id = "cancelbtn";

            buttonContainer.append(savebtn,cancelbtn);
            contentContainer.append(input,textarea);


            savebtn.addEventListener("click",(e)=>{

                  if(!input.value.trim() || !textarea.value.trim()){
                alert("Enter VAlid Data !!");
                return;
            }
                renderviewMode(input.value,textarea.value,noteContainer);
                
            });

            cancelbtn.addEventListener("click",(e)=>{
                renderviewMode(title,Description,noteContainer);
               
            });

            noteContainer.append(contentContainer,buttonContainer);

    }

    function renderviewMode(title,Description,noteContainer) {

        noteTitle.value = "";
        noteDescription.value = "";

        noteContainer.innerHTML = "";

        noteContainer.classList.remove("edit-mode");

        const TitleDiv = document.createElement('div');
        const TextareaDiv = document.createElement('div');

        TitleDiv.id  ="TitleDiv";
        TextareaDiv.id = "TextareaDiv";
        

        TitleDiv.textContent  =title;
        TextareaDiv.textContent = Description;

        const divEditbtn = document.createElement('button');
        divEditbtn.textContent = "Edit";
        divEditbtn.id = "divEditbtn";

         const divDeletebtn  =document.createElement('button');
        divDeletebtn.textContent = "Delete";
        divDeletebtn.id = "divDeletebtn";

        const contentContainer2 = document.createElement('div');
        contentContainer2.className = "contentContainer";
        const buttonsContainer2 = document.createElement('div');
        buttonsContainer2.className = "buttonsContainer";

        contentContainer2.append(TitleDiv,TextareaDiv);
        buttonsContainer2.append(divEditbtn,divDeletebtn);

        divEditbtn.addEventListener("click",(e)=>{
           
            renderEditMode(title,Description,noteContainer);
        })


        divDeletebtn.addEventListener("click",(e)=>{
            e.preventDefault();
            noteContainer.remove();
        })

        noteContainer.append(contentContainer2,buttonsContainer2);
    }


addbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(!noteTitle.value.trim() || !noteDescription.value.trim()) {
        alert("Please Enter Valid Data!!");
        return;
    }
          

    const taskCard = document.getElementById('taskCard');
    

    const titleValue =document.createElement('div');
    const DescriptionValue =document.createElement('div');
    titleValue.textContent  = noteTitle.value;
    DescriptionValue.textContent =noteDescription.value;
    titleValue.id = "titleValue";
    DescriptionValue.id = "DescriptionValue";
    

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
            savedContentContainer.className = "savedContentContainer";

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

        oldTitle.textContent = saveInput;
        oldDiscription.textContent = saveTextarea;

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
