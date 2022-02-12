export default{
    addTurtle: function (title,text){
        let key=localStorage.length;
        let turtle={
            title:title,
            text: text
        }
        localStorage.setItem(key++,JSON.stringify(turtle));
    },

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