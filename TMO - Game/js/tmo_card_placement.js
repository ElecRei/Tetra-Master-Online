$(document).ready(function(){
   
    var cardMat = document.getElementById("card_mat");
   
    for(i=1; i <= 16; i++){
        
        $(cardMat).append("<div class='panel' id='" + i + "'><span></span></div>");
        console.log("Panel " + i + " created.");
        
    }
    
    var siblings_of = [];

    siblings_of[1] = [2, 5, 6];
    siblings_of[2] = [1, 3, 5, 6, 7];
    siblings_of[3] = [2, 4, 6, 7, 8];
    siblings_of[4] = [3, 7, 8];

    siblings_of[5] = [1, 2, 6, 9, 10];
    siblings_of[6] = [1, 2, 3, 5, 7, 9, 10, 11];
    siblings_of[7] = [2, 3, 4, 6, 8, 10, 11, 12];
    siblings_of[8] = [3, 4, 7, 11, 12];

    siblings_of[9] = [5, 6, 10, 13, 14];
    siblings_of[10] = [5, 6, 7, 9, 11, 13, 14, 15];
    siblings_of[11] = [6, 7, 8, 10, 12, 14, 15, 16];
    siblings_of[12] = [7, 8, 11, 15, 16];

    siblings_of[13] = [9, 10, 14];
    siblings_of[14] = [9, 10, 11, 13, 15];
    siblings_of[15] = [10, 11, 12, 14, 16];
    siblings_of[16] = [11, 12, 15];
    
    function mark_siblings(id) {
      siblings_of[id].forEach(function(item) {
        $('#' + item).addClass('marked');
      });
    }

    function reset() {
      $('.selected').removeClass('selected');
      $('.marked').removeClass('marked');
    }


    $(document).ready(function() {
      $('.panel').on('click', function() {
        var id = $(this).attr('id');
        reset();
        $(this).addClass('selected');
        mark_siblings(id);
      })
    });
    
});