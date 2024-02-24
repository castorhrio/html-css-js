const user_input = document.querySelector(".user_input");
const generateBtn = document.querySelector(".generate-qr-code-button");
const loader = document.querySelector(".loader");
const qrImage = document.querySelector(".qr-image");

generateBtn.onclick = async () => {
  console.log("1");
  qrImage.src = "";
  let content = user_input.value;

  loader.style.display = "block";

  if (content.length == 0) {
    alert("请输入要生成的内容！");
  } else {
    let imageSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${content}`;
    let data = await fetch(imageSource);
    loader.style.display = "none";

    let response = await data.blob();
    let url = URL.createObjectURL(response);
    qrImage.src = url;
  }
};
