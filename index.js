iterations = 0

function generate_cat(){
  iterations++;
  if (iterations >= 20){
    console.log("repeat");
    iterations = 0;
    src = "vids/tenor" + iterations + ".gif";
    document.getElementById("img").src = src;
    console.log(src);
    return iterations;
  } else {
    src = "vids/tenor" + iterations + ".gif";
    document.getElementById("img").src = src;
    console.log(src);
    return iterations;
  }
} 