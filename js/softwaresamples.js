var title = document.getElementById("mtitle")
var content = document.getElementById("content")
var foot = document.getElementById("mfooter")
var githubIcon = "<img class='img-responsive aku' src = 'images/github.png' height='100' width='100'></img>"
function gradrClick(){
    title.innerHTML = "Gradr"

    content.innerHTML = "<div style= 'padding-bottom: 10px;' class = 'textBlock' ><p> " +
    "This is a program I worked on with two other students in a Software Engineering course. "+
    "Its a crossplatform Desktop application written in Java using Swing for the frontend </div>" +
    "<div class = 'row'> " +  "<div class = 'col-xs-12 col-md-6 col-lg-6'>" + 
    "<img style= 'width:100%; height:auto;' src ='images/screenshots/Gradr/img1.png'></img> </div>" +
    "<div class = 'col-xs-12 col-md-6 col-lg-6'>" +
    "<img style= 'width:100%; height:auto;' src ='images/screenshots/Gradr/img2.png'></img> </div>" +
    "<div class = 'col-xs-12 col-md-12 col-lg-12'>" + 
    "<img style= 'width:100%; height:auto;' src ='images/screenshots/Gradr/img3.png'></img> </div></div>"

    foot.innerHTML = "<div class = 'row'> " +  "<div class = 'col-xs-3 col-md-3 col-lg-3'></div" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'> <a href = https://github.com/mariomerendino/Gradr>" + githubIcon + "</a></div>" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'>" +
    "<a href = downloads/Gradr.zip> <button class = 'btn'> Download </button></a> </div></div>"


}
function sortingClick(){
    title.innerHTML = "Sorting"
    
    content.innerHTML = "<div style= 'padding-bottom: 10px;' class = 'textBlock' ><p> " +
    "Application that compares the run time of sorting algorithms." +
    "<div class = 'row'> " + 
    "<div class = 'col-xs-12 col-md-12 col-lg-12'> " +
    "<img style= 'width:100%; height:auto;' src ='images/screenshots/sorting/img1.png'></img> </div></div>"

    foot.innerHTML = "<div class = 'row'> " +  "<div class = 'col-xs-3 col-md-3 col-lg-3'></div" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'> <a href = downloads/sorting.zip> <button class = 'btn'> Download </button></a> </div></div>"
}
function tictactoeClick(){
    title.innerHTML = "Tic Tac Toe"
    
    content.innerHTML = "<div style= 'padding-bottom: 10px;' class = 'textBlock' ><p> " +
    "Simple <i>Android</i> application I built as my first step into mobile programming."+
    "<div class = 'row'> " +  "<div class = 'col-xs-4 col-md-4 col-lg-4'> </div>" + 
    "<div class = 'col-xs-4 col-md-4 col-lg-4'> " +
    "<img style= 'width:100%; height:auto;' src ='images/screenshots/tictactoe/img1.png'></img> </div></div>"

    foot.innerHTML = "<div class = 'row'> " +  "<div class = 'col-xs-3 col-md-3 col-lg-3'></div" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'> <a href = https://github.com/mariomerendino/tictactoe>" + githubIcon + "</a></div>" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'>" +
    "<a href = downloads/tictactoe.apk> <button class = 'btn'> Download </button></a> </div></div>"
}
function basechangerClick(){
    title.innerHTML = "Base Changer"
    
    content.innerHTML = "<div style= 'padding-bottom: 10px;' class = 'textBlock' ><p> " +
    "Simple <i>Xamarin.forms</i> application I built to use for my computer organization course"+
    "it does simple base conversions. The unique part is it works with negative numbers very well.</div>" +
    "<div class = 'row'> " +  "<div class = 'col-xs-4 col-md-4 col-lg-4'> </div>" + 
    "<div class = 'col-xs-4 col-md-4 col-lg-4'> " +
    "<img style= 'width:100%; height:auto;' src ='images/screenshots/BaseChanger/img1.png'></img> </div></div>"

    foot.innerHTML = "<div class = 'row'> " +  "<div class = 'col-xs-3 col-md-3 col-lg-3'></div" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'> <a href = https://github.com/mariomerendino/BaseChanger>" + githubIcon + "</a></div>" +
    "<div class = 'col-xs-3 col-md-3 col-lg-3'>" +
    "<a href = downloads/com.test.Base_Changer.apk> <button class = 'btn'> Download </button></a> </div></div>"


}