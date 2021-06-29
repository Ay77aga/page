let btn_nav = document.querySelector('.mynav'), //                  .             .
  open_nav = document.querySelector('.nav'),
  close_btn = document.querySelector('.close');

btn_nav.onclick = function nav_open() {
  open_nav.style = ` width : 200px; height: 200px;
      border: 6px solid #0D78A4AB;`;
  btn_nav.style.display = 'none';
  close_btn.style.display = 'block';
}
close_btn.onclick = function close() {
  open_nav.style = ` width: 0;height :0; border: none;`;
  close_btn.style.display = 'none';
  btn_nav.style.display = 'block';
}