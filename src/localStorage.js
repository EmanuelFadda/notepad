

function addTurtle (title,text){
    let key=localStorage.length;
    let turtle=createTurtle(title,text);
    localStorage.setItem(key++,JSON.stringify);
}

function createTurtle(title,text){
    let turtleComplete=(title!="" && text!="")
    if (turtleComplete){
        let turtle={
            title= title,
            text= text,
        }
        return turtle        
    }
}

function deleteTurtle(){

}