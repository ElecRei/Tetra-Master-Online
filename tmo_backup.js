
/* 

    Power Levels

    0 = 0-10
    1 = 11-20
    2 = 21-30
    3 = 31-40
    4 = 41-50
    5 = 51-60
    6 =
    7 =
    8 =
    9 =
    A =
    B =
    C =
    D =
    E =
    F =



*/

$(document).ready(function(){
    
    /*
    var arrayTest = [1,2,"3",4];
    
    var b = 3;
    
    if(arrayTest.includes(b)){
        alert("Hello");
    }
    else{
        alert("fail");
    }
    */
    
    //var test = Math.floor(Math.random() * 16) + 1; 
    
    //console.log(test);
    
    var cardMat = document.getElementById("card_mat");
    
    var turnClicks = 1;
   
    for(i=1; i <= 16; i++){
        
        $(cardMat).append("<div class='panel' id='" + i + "'></div>");
        console.log("Panel " + i + " created.");
        
    }
    
    var playerPanels = [];
    
    var cardClick = 0;
    
    var lastPanel;
    
    var cpuLastPanel;
    
    $(".panel").click(function(){
        
        console.log(cardClick);
        
        if(cardClick < turnClicks){
        
            if($(this).hasClass("selected")){
                $(this).removeClass("selected");
            }
            else{
                $(this).addClass("selected");
            }
            
            cardClick++ 
            
            lastPanel = $(this).attr("id");
            
            lastPanel = parseInt(lastPanel);
            
            playerPanels.push(lastPanel);
            
            console.log("Last panel clicked: " + lastPanel);
            console.log("Player's total panels: " + playerPanels);
            
            $("#submit").removeAttr("disabled");
            
            console.log(cardClick);
        }
        else{
            alert("Your turn has ended!");
        }
    });
    
    var cpuPanels = [];
    
    //playerPanels.push(5);
    
    $("#submit").click(function(){
        
        /*
        for(i=0;i<16;i++){
            
            
            if($("#" + i).hasClass("selected")){
                
                console.log(i);
                
                if([i].indexOf(playerPanels) > -1){
                   playerPanels.push(i);
                }
                else{
                    
                }
                
            }
            
            else{
            }
            
            
        }
        */
        
        var cpuSelection = Math.floor(Math.random() * 16) + 1;
        // playerPanels.indexOf(cpuSelection) > -1
        var e = 0;
        
        while(e < 1){
            if(playerPanels.indexOf(cpuSelection) > -1 || cpuPanels.indexOf(cpuSelection) > -1){
                cpuSelection = Math.floor(Math.random() * 16) + 1;
                console.log("CPU SELECTION " + cpuSelection);
            }
            else{
                e++;
                console.log("CPU number chosen: " + cpuSelection);
            }
        }
        
        cpuSelection = parseInt(cpuSelection);
        
        cpuPanels.push(cpuSelection);
        
        console.log("Player panels after cpu turns" + playerPanels);
        console.log("CPU's panels: " + cpuPanels);
        console.log("Computer selected" + cpuSelection);
        
        if($("#" + cpuSelection).hasClass("cpu_selected")){
        }
        else{
            $("#" + cpuSelection).addClass("cpu_selected");
        }
        
        if(playerPanels.length + cpuPanels.length == 16){
            alert("Game Finished!!");
            $("#submit").attr("disabled", true);
        }
        else{
            alert("Your turn.");
            cardClick = 0;
        }
        
        
    });
    
    /*
    
    var cardMat2 = document.getElementById("card_mat2");
    
    for(i=1; i <= 16; i++){
        
        $(cardMat2).append("<div class='panel2' id='" + i + "a'><span></span></div>");
        console.log("Panel " + i + " created.");
        
    }
    
    $(".panel2").click(function(){
        $(this).addClass("selected");
    });
    
    */
    
});