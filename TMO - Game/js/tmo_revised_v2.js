$(document).ready(function(){
    
    /* Card Mat Setup */
    
    var cardMat = document.getElementById("card_mat");
   
    for(i=1; i <= 16; i++){
        
        $(cardMat).append("<div class='panel' id='" + i + "'><span></span></div>");
        console.log("Panel " + i + " created.");
        
    }
    
    /* Player & CPU variables */
    
    var turnClicks = 1;
    
    var playerCards = 5;
    
    var playerPanels = []; // Needed to track what computer can pick
    
    var cardClick = 0;
    
    var lastPanel;
    
    var cpuCards = 5;
    
    var cpuLastPanel;
    
    var cpuPanels = [];
    
    
    function gameOverCheck() {
        if(playerCards == 0 && cpuCards == 0){
            $("#submit").attr("disabled", true);
        }
        else {
            console.log("Player has " + playerCards + " cards remaining");
            console.log("CPU has " + cpuCards + " cards remaining");
        }
    }
    
    function boardSetup() {
        
        var blockArray = [];
        
        for(i=0;i>5;i++){
            var rNumber = Math.floor(Math.random() * 16) + 1;
            blockArray.push(rNumber);
            console.log(blockArray);
        }
        
    }
    
    boardSetup();
    
    var findSiblings = function(num){
        
        var current = cpuSelection;
        var siblings =[];
        
        if(current == 1){
            siblings.push(current.siblings().eq(0));
            siblings.push(current.siblings().eq(3));
            siblings.push(current.siblings().eq(4));
        }
        
        else {
            console.log;
        }
        
    }
    
    /* Player's Turn */
    
    $(".panel").click(function(){
        
        gameOverCheck();
        
        console.log(cardClick);
        
        if(cardClick < turnClicks){
        
            if($(this).hasClass("selected") || $(this).hasClass("cpu_selected")){
                //$(this).removeClass("selected");
                alert("A card has been placed here already!");
            }
            else{
                $(this).addClass("selected");
                lastPanel = $(this).attr("id");
                lastPanel = parseInt(lastPanel);
                playerPanels.push(lastPanel);
                cardClick++
                playerCards--;
                
                $("#submit").removeAttr("disabled");
            }
            
            console.log("Last panel clicked: " + lastPanel);
            console.log("Player's total panels: " + playerPanels);
            console.log(cardClick);
        }
        else{
            alert("Your turn has ended!");
        }
    });
    
    /* CPU's Turn */
    
    $("#submit").click(function(){
        
        gameOverCheck();
        
        $("#submit").attr("disabled", true);
        
        setTimeout(function(){
        
            var cpuSelection = Math.floor(Math.random() * 16) + 1;
            // playerPanels.indexOf(cpuSelection) > -1
            var e = 0;
            var loopCount = 0;

            while(e < 1){
                if(playerPanels.indexOf(cpuSelection) > -1 || cpuPanels.indexOf(cpuSelection) > -1){
                    cpuSelection = Math.floor(Math.random() * 16) + 1;
                    console.log("CPU SELECTION " + cpuSelection);
                    if(loopCount >= 16){break;};
                }
                else{
                    e++;
                    console.log("CPU number chosen: " + cpuSelection);
                    if(loopCount >= 16){break;};
                }
                loopCount++;
            }

            cpuSelection = parseInt(cpuSelection);
            
            findSiblings;

            cpuPanels.push(cpuSelection);

            console.log("Player panels after cpu turns" + playerPanels);
            console.log("CPU's panels: " + cpuPanels);
            console.log("Computer selected" + cpuSelection);

            if($("#" + cpuSelection).hasClass("cpu_selected")){
            }
            else{
                $("#" + cpuSelection).addClass("cpu_selected");
            }

            if(playerPanels.length + cpuPanels.length == 10){
                setTimeout(function(){
                    alert("Game Finished!!");
                    $("#submit").attr("disabled", true);
                }, 1000);
            }
            else{
                setTimeout(function(){
                    alert("Your turn.");
                    cardClick = 0;
                    cpuCards--;
                    //$("#submit").removeAttr("disabled");
                }, 1000);
            }
        
        }, 1000);
        
    });
    
});