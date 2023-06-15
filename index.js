// document.addEventListener("DOMContentLoaded", () => {
//   const video = document.querySelector("body > video");
//   const cvs = document.createElement("canvas");
//   const ctx = cvs.getContext("2d");

//   const getMedia =
//     navigator.getUserMedia ||
//     navigator.webkitGetUserMedia ||
//     navigator.mozGetUserMedia ||
//     navigator.msGetUserMedia;

//   if (getMedia) {
//     getMedia.call(
//       navigator,
//       {
//         video: {
//           width: 1280,
//           height: 720,
//         },
//         audio: false,
//         facingMode: {
//             exact: 'environment'
//           }
//       },
//       (stream) => {
//         if ("srcObject" in video) {
//           video.srcObject = stream;
//         } else {
//           const vu = window.URL || window.webkitURL;
//           video.src = vu.createObjectURL(stream);
//         }
//         video.play();
//       },
//       (error) => {
//         if (window.console) {
//           console.error(error);
//         }
//       }
//     );
//   }

//   video.addEventListener(
//     "canplay",
//     (ev) => {
//       if (!streaming) {
//         const width = 640; // Set your desired width
//         const height = video.videoHeight / (video.videoWidth / width);
//         video.setAttribute("width", width);
//         video.setAttribute("height", height);
//         streaming = true;
//       }
//     },
//     false
//   );
// });

window.addEventListener("load", () => {
    setTimeout(() => {
        var modelViewer = document.querySelector('model-viewer');
        console.log(modelViewer)
        console.log("Can activate AR: " + modelViewer.canActivateAR);
        modelViewer.activateAR();
    }, 2000)
  });