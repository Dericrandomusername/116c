/* https://teachablemachine.withgoogle.com/models/IMBFVCs9j/ */
function startClassification(
){
    navigator.mediaDevices.getUserMedia({audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IMBFVCs9j/model.json",modelready);
}
function modelready(){
    console.log("model has been initialized");
    classifier.classify(gotresults);

}function gotresults(error,results
    ){
        console.log("gotresults");
        
    }