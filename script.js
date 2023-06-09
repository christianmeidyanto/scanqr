
 var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: false });
    scanner.addListener('scan',function(content){
     console.log(content);
    });
    Instascan.Camera.getCameras().then(function (cameras){
        if(cameras.length>0){
          if(cameras.length>=3){
            scanner.start(cameras[2]);
          }else if(cameras.length>=2){
            scanner.start(cameras[1]);
          }else{
            scanner.start(cameras[0]);
          }
        }else{
            console.error('No cameras found.');
            alert('No cameras found.');
        }
    }).catch(function(e){
        console.error(e);
        alert(e);
    });
