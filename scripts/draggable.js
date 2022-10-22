var positions = JSON.parse(localStorage.positions || "{}");
$(function () {
    var d = $("[id=draggable]").attr("id", function (i) {
        return "draggable_" + i
    })
    $.each(positions, function (id, pos) {
        $("#" + id).css(pos)
    })

    d.draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function (event, ui) {
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)
        }
    });
            
});
$(function() {
    $( ".draggable" ).draggable();
  });

document.getElementById('containment-wrapper').onclick = function clickEvent(e) {
        var rect = e.currentTarget.getBoundingClientRect();
        var xPos = 0;
        var yPos = 0;
const thing = document.querySelectorAll('.avatar,.car,.wide-avatar,.pack-avatar,.pack-wide-avatar,.pack-vehicle,.vehicle,.building,.item,.monster');
    for (var i = 0; i < thing.length; i++) {

            thing[i].addEventListener('dblclick', function(e) { 
                if (e.altKey) {
                    this.style.position="fixed";
                    this.style.top="50vh";
                    this.style.left="50vw";
                    this.style.zIndex="99";
                } else if (e.shiftKey) {
                    this.style.position="absolute";
                    xPos = e.clientX - rect.left; //x position within the element.
                    yPos = e.clientY - rect.top;  //y position within the element.
                    console.log("ShiftLeft: " + xPos + " ; ShiftTop : " + yPos + ".");
                    this.style.top=yPos+'px';
                    this.style.left=xPos+'px';

                } 
                else if (e.metaKey){
                    this.style.width='40px';
                    this.style.height='40px';
                }
            })
    }
}

