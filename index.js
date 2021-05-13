let shareButton=document.getElementById("simpleshare");
// shareButton.addEventListener('click', function () {
//   var filesArray = document.getElementById('share-files').files
// console.log(document.getElementById('share-files'));
//   var shareData = { files: filesArray };

//   if (navigator.canShare && navigator.canShare(shareData)) {

//   // Adding title afterwards as navigator.canShare just
//   // takes files as input
//   shareData.title = "Cowin"
//   shareData.url="https://www.flipkart.com/"

//   navigator.share(shareData)
//   .then(() => console.log('Share was successful.'))
//   .catch((error) => console.log('Sharing failed', error));

//   } else {
//   console.log("Your system doesn't support sharing files.");
//   }
// })

function shareNow(fileName) {
  fetch("/" + fileName)
.then(function(response) {
  console.log(response)
return response.arrayBuffer()
})
.then(function(fileBuffer) {
  console.log(fileBuffer)
var file = new File([fileBuffer], fileName, {type: "image/png"});
console.log(file);
var filesArray = [file];
      console.log("filesArray", filesArray);

if(navigator.canShare && navigator.canShare({ files: filesArray })) {
navigator.share({
  files: filesArray,
  url: ''
})
    .then(() => console.log("Share was successful."))
    .catch((error) => console.log("Sharing failed", error));
}
 else {
  console.log("Your system doesn't support sharing files.");
}
});
}

  

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
      return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
    return "unknown";
  }
function Aarogya() {
    let os = getMobileOperatingSystem();
    if (os === "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_IN&gl=US";
    } else if (os === "iOS") {
      window.location.href = "https://apps.apple.com/in/app/aarogyasetu/id1505825357";
    } else if (os === "Windows Phone") {
      window.location.href = "https://www.mygov.in/aarogya-setu-app/";
    } else {
      window.open("https://www.mygov.in/aarogya-setu-app/", "_blank");
    }
}
let  Umang=()=> {
    let os = getMobileOperatingSystem();
    if (os === "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=in.gov.umang.negd.g2c";
    } else if (os === "iOS") {
      window.location.href = "https://apps.apple.com/in/app/umang/id1236448857";
    } else if (os === "Windows Phone") {
      window.location.href = "https://web.umang.gov.in/landing/";
    } else {
      window.open("https://web.umang.gov.in/landing/","_blank");
    }
}
function  Cowin () {
    let os = getMobileOperatingSystem();
    if (os === "Android") {
      window.location.href = "https://play.google.com/store/apps/details?id=com.cowinapp.app&hl=en_IN&gl=US";
    } else if (os === "iOS") {
      window.location.href = "https://www.cowin.gov.in/home";
    } else if (os === "Windows Phone") {
      window.location.href = "https://www.cowin.gov.in/home";
    } else {
      window.open("https://www.cowin.gov.in/home", "_blank");
    }
}