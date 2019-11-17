var fruit = ["mango","apple","pear","peach","penut"];
var birds =["macaoou","coctail","budgie","love bird","kakatu","finch"];
 
i=0
for (;i<fruit.length;){

    document.write("<h3>"+fruit[i]+"</h3>");
    i++;
}

for(i=0;i<birds.length;){
  
document.write("<h3>"+birds[i]+"</h3>")
i++;
}

var mango ={
    color:"green",
    origin:"bangladash",
    size:"5-12inch",
    prize:"2$-7$",
    change_prize: function(season){
       switch (season) {
           case "january":
           prize=("3$-8$");
           break;
           case "fabruary":
           document.write("4$-9$");
       } 
    }
}
 document.write(mango.prize);
//  document.write(change_prize("january"));
mango.change_prize("january");
document.write("3$-8$");
 