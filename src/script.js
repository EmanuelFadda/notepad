export default{
    addTurtle: function (title,text){
        let turtle={
            title: title,
            text: text
        }
        localStorage.setItem(localStorage.length,JSON.stringify(turtle))
    },
    //fare in modo che si possa creare una struttura dati con la chiave "turtle" che mi permetta l'immagazzinamento di tutte le turtle
}
/*
 deleteTurtle: function(keyOfTurtle){
    localStorage.removeItem(String(keyOfTurtle))
    let variableToControl=keyOfTurtle+1
    while(localStorage.getItem(variableToControl)!=null){
        localStorage.setItem(keyOfTurtle++,localStorage.getItem(variableToControl++))
    }
}
*/