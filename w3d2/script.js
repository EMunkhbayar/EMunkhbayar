$(function() {
    let lastIdx = 0;
    $('#startBtn').click(function(){
        let growth = parseInt($('#growth')[0].value);
        let width = $('#width')[0].value;
        let interval = $('#interval')[0].value;
        let numCircles = $('#numCircles')[0].value;
        let max = parseInt(numCircles)+lastIdx;
        for(let idx=lastIdx; idx < max; idx++){
            let newCircle = makeCircle(width, idx);
            $(".container").append(newCircle);
            
            let intIdx = setInterval(grow, interval, growth, newCircle);
            newCircle.click(()=>{
                newCircle.remove();
                if(intIdx>0) clearInterval(intIdx);
            })
        }
        lastIdx = max;
    });

    const grow = (growth, newCircle) => {
        newCircle.css({
            "height" : parseInt(newCircle.css("height")) + growth + "px",
            "width" : parseInt(newCircle.css("width")) + growth + "px",
        });
    };

    const makeCircle = function(width, idx) {
        return $("<div>", {
            'class': "circle",
            'id': idx
        })
        .css({
            'height': width + "px",
            'width': width + "px",
            'background-color': "rgb("+idx+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")",
            'left': idx + Math.floor(Math.random() * 85) + "%",
            'right': idx + Math.floor(Math.random() * 85) + "%",
            'top': idx + Math.floor(Math.random() * 85) + "%",
            'bottom': idx + Math.floor(Math.random() * 85) + "%",
        })
    };
})