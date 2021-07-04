console.log("this is js")
shownotes();
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function(e){
    
    let addtext =  document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtext.value="";
    console.log(notesObj);
    shownotes();
})
function shownotes(){
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = ""
    notesObj.forEach(function(element,index ) {
        html+=
        `
        <div class="notecard my-2 mx-2" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id =" ${index}"onclick = "deleteNode(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
    </div>
        `
        
    });
    let notesElm = document.getElementById("notes")
    if(notesObj.length!=0){
            notesElm.innerHTML =  html;      
    }
    else{
        notesElm.innerHTML = `Nothing to show. Click on "Add Notes" to create one.`
    }
}
function deleteNode(index){
    console.log("i am deleting this node", index)
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = []
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}
let search = document.getElementById('searchtxt')
search.addEventListener("input",function(){

    let inputval = search.value.toLowerCase();
     let noteCards = document.getElementsByClassName('notecard');
     Array.from(noteCards).forEach(function(element){
               let cardtxt = element.getElementsByTagName("p")[0].innerText;
               if(cardtxt.includes(inputval)){
                     element.style.display = 'block'
                }
                else{
                   element.style.display = 'none'
               }
})
})
