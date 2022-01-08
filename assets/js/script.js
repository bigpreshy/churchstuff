const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawBackgroundImage(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = document.getElementById("eaglegen");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// Receive the uploaded file and render
function handleImage(e) {
  let reader = new FileReader();
  reader.onload = function (event) {
    let img = new Image();
    img.onload = function () {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 819, 320, 228, 286);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

function download() {
  let download = document.getElementById("download");
  let image = document
    .getElementById("canvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}

onload = function () {
  let imageLoader = document.getElementById("imageLoader");
  imageLoader.addEventListener("change", handleImage, false);

  drawBackgroundImage(canvas, ctx);
};
