const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

// 사용자가 마우스를 클릭하는 시점에 호출되는 함수
// "그림 그리기 시작" 하는 시점에 호출
function onMouseDown(event) {
  painting = true;
}

// 사용자가 마우스 클릭을 누르고 클릭을 마치는(클릭 버튼에서 손을 때는) 시점에 호출되는 함수
// "그림 그리기 끝" 나는 시점에 호출
function onMouseUp(event) {
  stopPainting();
}

// mouse 가 canvas 영역을 벗어났을 때,
// 벗어난 영역의 최초 위치를 호출되는 함수
// function onMouseLeave(event) {
//   console.log(event);
// }

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
