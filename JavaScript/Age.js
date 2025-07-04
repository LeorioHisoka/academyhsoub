
let AgeInput=prompt(" How old are you ?!");
let Age = Number(AgeInput);
if (!isNaN(Age)&& Age>0) {
    
    if (Age<13)
    console.log("oh you are child !!");

    else if (Age >13&&Age <= 17)
    console.log("Wonderfull, you are still  young");

    else if (Age > 18 )
    console.log("you are adult");

}   else {
    console.log("enter a correct number"); 
}
