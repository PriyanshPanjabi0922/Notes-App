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
    const taskCard = document.querySelector('.taskCard');

    const noteContainer = document.createElement('div');
    noteContainer.className  = "noteContainer";

    renderviewMode(noteTitle.value,noteDescription.value,noteContainer);

    noteTitle.value = "";
        noteDescription.value = "";

     taskCard.append(noteContainer);
    });
