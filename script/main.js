const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

(
  function () {
    console.log('Hello JavaScript!');
    
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia({video: true}, function(stream) {
      video.srcObject = stream;
    }, function(e) {
      console.log('エラー!', e);
    });

    console.log('video', video);
    console.log('canvas', canvas);
    console.log('Hello JavaScript!');
  }
)();

function photographing() {
  ctx.drawImage(video, 0, 0);
  const imgarea = document.querySelector('img');
  imgarea.src = canvas.toDataURL('image/webp');
}
