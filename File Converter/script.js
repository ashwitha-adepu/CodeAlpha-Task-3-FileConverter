function convertFile() {
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];
  
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var convertedText = convertToText(e.target.result);
        download(convertedText);
      }
      reader.readAsText(file);
    }
  }
  
  function convertToText(fileData) {
    var jsonData = {
      data: fileData
    };
    return JSON.stringify(jsonData);
  }
  
  function download(convertedText) {
    var downloadLink = document.getElementById("downloadLink");
    downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(convertedText);
    downloadLink.innerHTML = "Download Converted File";
  }