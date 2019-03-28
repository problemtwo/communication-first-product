// https://docs.opencv.org/3.4.3/dd/d00/tutorial_js_video_display.html

var library = {
    'hello':undefined,
    'my':undefined,
    'name':undefined,
};

var letters = {
    'a':undefined,
    'b':undefined,
    'c':undefined,
    'd':undefined,
    'e':undefined,
    'f':undefined,
    'g':undefined,
    'h':undefined,
    'i':undefined,
    'j':undefined,
    'k':undefined,
    'l':undefined,
    'm':undefined,
    'n':undefined,
    'o':undefined,
    'p':undefined,
    'q':undefined,
    'r':undefined,
    's':undefined,
    't':undefined,
    'u':undefined,
    'v':undefined,
    'w':undefined,
    'x':undefined,
    'y':undefined,
    'z':undefined
}

cv['onRuntimeInitialized'] = function() {
        
    var video = document.getElementById('output');
    video.width = 480;
    video.height = 360;
    navigator.mediaDevices.getUserMedia({'video':true,'audio':false})
    .then(function(stream) {
    // https://docs.opencv.org/3.4.3/dd/d00/tutorial_js_video_display.html
        
        video.srcObject = stream;
        video.play();
    
    });
}

document.getElementById('search').onkeydown = function(e) {
    if(e.keyCode === 13) {
        e.preventDefault();
    }
}