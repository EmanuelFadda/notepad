export default{
    addTurtle: function (title,text){
        if (localStorage.getItem("turtle")==undefined){
            let list=[]
            localStorage.setItem(turtle,list)
        }
        let key= localStorage.getItem('turtle').length
        let turtle={
            title:title,
            text: text
        }
        localStorage.getItem('turtle')[key]=JSON.stringify(turtle);
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