export default{
    addTurtle: function (title,text){
        let turtle={
            title: title,
            text: text
        }
        localStorage.setItem(localStorage.length,JSON.stringify(turtle))
    },
    showAllTurtles(){
        let allTurtles={}
        for (let i=1;i<localStorage.length;i++){
            let turtle=JSON.parse(localStorage.getItem(i))
            allTurtles[i-1]=turtle;
        }
        return allTurtles
    }

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
