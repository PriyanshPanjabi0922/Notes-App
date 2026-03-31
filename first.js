const noteTitle  =document.getElementById('title');
const noteDescription =document.getElementById('Description');
const addbtn = document.querySelector('button');


addbtn.addEventListener("click",(e)=>{
    
    const taskCard = document.getElementById('taskCard');
    e.preventDefault();

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

    noteContainer.append(contentContainer,buttonContainer);

    edit.addEventListener("click",(e)=>{
        e.preventDefault();

        const storeTitleValue = titleValue.textContent;
        const storeDescriptionValue  =DescriptionValue.textContent;
        
        const input = document.createElement('input');
        const textarea = document.createElement('textarea');
        
        input.value = storeTitleValue;
        textarea.value = storeDescriptionValue;

        input.id = "input";
        textarea.id = "textarea";

        const newContentContainer = document.createElement('div');

        newContentContainer.append(input,textarea);
        newContentContainer.id = "newContentContainer";

        titleValue.remove();
        DescriptionValue.remove();


        noteContainer.append(newContentContainer);
        Delete.remove();
        edit.remove();

        // creating the save and cancel btn's

        const save = document.createElement('button');
        save.id = "savebtn";
        save.textContent = "Save";
        const cancel = document.createElement('button');
        cancel.id = "cancelbtn";
        cancel.textContent = "Cancel";

        // appending the btn's in the newEditButtons

        const newEditButtons  =document.createElement('div');
        newEditButtons.append(save,cancel);
        newEditButtons.id = "newEditButtons";

        noteContainer.append(newEditButtons);
        
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
            

            input.remove();
            textarea.remove();
            save.remove();
            cancel.remove();
            contentContainer.remove();
            buttonContainer.remove();
        })

    cancel.addEventListener("click",(e)=>{
        e.preventDefault();

        input.remove();
        textarea.remove();
        save.remove();
        cancel.remove();
        contentContainer.remove();
        buttonContainer.remove();

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
     
    })

    })


    Delete.addEventListener("click",(e)=>{
        e.preventDefault();
        noteContainer.remove();
    });

    taskCard.append(noteContainer);
});
