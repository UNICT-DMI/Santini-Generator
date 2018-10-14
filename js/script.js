(function () {
  'use strict';

	let app = angular.module('SantiniGenerator');
	app.controller('MainController', function($scope) {

    $scope.text = {
      senato : "",
      cda : "",
      ndv : "",
      cus : "",
      dip : "",
      cdl : "",
      med : ""
    };

    $scope.check = {
      senato: true,
      cda: true,
      ndv: true,
      cus: true,
      dip: true,
      cdl: true,
      med: false
    };

    $scope.img = {
      senato: { name: "logo vuoto", url: "img/fake_logo.png" },
      cda: { name: "logo vuoto", url: "img/fake_logo.png" },
      ndv: { name: "logo vuoto", url: "img/fake_logo.png" },
      cus: { name: "logo vuoto", url: "img/fake_logo.png" },
      dip: { name: "logo vuoto", url: "img/fake_logo.png" },
      cdl: { name: "logo vuoto", url: "img/fake_logo.png" },
      med: { name: "logo vuoto", url: "img/fake_logo.png" },
    };

    $scope.fontSize = 60;

    $scope.activeTab = 0;

    $scope.loghi = app.loghi;
    $scope.current_logo = $scope.loghi[0];

    $scope.disabled = undefined;

    $scope.toptext = '';
    $scope.bottomtext = '';

    /* create canvas */
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let width = 500;
    let height = 1200;

    ctx.clearRect(0, 0, width, height);
    canvas.width = width;
    canvas.height = height;
    canvas.id = 'myCanvas';
    document.getElementsByClassName("canvas")[0].appendChild(canvas);

    $scope.addText = () => {
      let ctx = document.getElementById("myCanvas").getContext("2d");

      let size = 1;
      for (let i in $scope.check)
        if ($scope.check[i])
          size++;

      canvas.height = 125*size;
  
      $scope.check.cda

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();

      ctx.fillStyle = "#fff";
      ctx.fillRect(0,0, width, height);

      ctx.lineWidth = 1;
      ctx.fillStyle = "#000";
    	ctx.textAlign = "center";

      ctx.font = "bold 18px Arial";
      ctx.fillText("ELEZIONI UNIVERSITARIE 23 - 24 OTTOBRE 2018", 250, 25);

      let d = 0;

      if ($scope.check.senato) {
        ctx.fillStyle="#fffc00";
        ctx.fillRect(12,57,475,100);
        ctx.moveTo(125,145);
        ctx.lineTo(450,145);

        let img = new Image;
        img.onload = ((d) => {
          return () => {
            ctx.drawImage(img, 22, 60+d, 90, 90);

            ctx.moveTo(22,60+d);
            ctx.lineTo(90+22,90+60+d);
            ctx.moveTo(22,60+90+d);
            ctx.lineTo(90+22,60+d);
            ctx.stroke();
          }
        })(d);
        img.src = $scope.img.senato.url;

        ctx.fillStyle = "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Senato Accademico", 230, 72);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Gialla)", 335, 72);
        $scope.drawText(ctx, $scope.text.senato, 290, 125);

        d += 125;
      }

      if ($scope.check.cda) {
        ctx.fillStyle="#ffffff";
        ctx.rect(12,57+d,475,100);
        ctx.moveTo(125,145+d);
        ctx.lineTo(450,145+d);

        let img = new Image;
        img.src = $scope.img.cda.url;
        img.onload = ((d) => {
          return () => {
            ctx.drawImage(img, 22, 60+d, 90, 90);

            ctx.moveTo(22,60+d);
            ctx.lineTo(90+22,90+60+d);
            ctx.moveTo(22,60+90+d);
            ctx.lineTo(90+22,60+d);
            ctx.stroke();
          }
        })(d);
        ctx.fillStyle = "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Consiglio di Amministrazione", 230, 72+d);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Bianca)", 360, 72+d);
        $scope.drawText(ctx, $scope.text.cda, 290, 130+d);

        d += 125;
      }

      if ($scope.check.ndv) {
        ctx.fillStyle="#ff90aa";
        ctx.fillRect(12,57+d,475,100);
        ctx.moveTo(125,145+d);
        ctx.lineTo(450,145+d);

        let img = new Image;
        img.src = $scope.img.ndv.url;
        img.onload = ((d) => {
          return () => {
            ctx.drawImage(img, 22, 60+d, 90, 90);

            ctx.moveTo(22,60+d);
            ctx.lineTo(90+22,90+60+d);
            ctx.moveTo(22,60+90+d);
            ctx.lineTo(90+22,60+d);
            ctx.stroke();
          }
        })(d);
        ctx.fillStyle = "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Nucleo di Valutazione", 230, 72+d);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Rosa)", 335, 72+d);
        $scope.drawText(ctx, $scope.text.ndv, 290, 130+d);

        d += 125;
      }

      if ($scope.check.cus) {
        ctx.fillStyle="#19c307";
        ctx.fillRect(12,57+d,475,100);
        ctx.moveTo(125,145+d);
        ctx.lineTo(450,145+d);

        let img = new Image;
        img.src = $scope.img.cus.url;
        img.onload = ((d) => {
          return () => {
            ctx.drawImage(img, 22, 60+d, 90, 90);

            ctx.moveTo(22,60+d);
            ctx.lineTo(90+22,90+60+d);
            ctx.moveTo(22,60+90+d);
            ctx.lineTo(90+22,60+d);
            ctx.stroke();
          }
        })(d);
        ctx.fillStyle = "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Comitato per lo Sport Universitario", 230, 72+d);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Verde)", 375, 72+d);
        $scope.drawText(ctx, $scope.text.cus, 290, 130+d);

        d += 125;
      }

      if ($scope.check.dip) {
        ctx.fillStyle="#98bce0";
        ctx.fillRect(12,57+d,475,100);
        ctx.moveTo(125,145+d);
        ctx.lineTo(450,145+d);

        let img = new Image;
        img.src = $scope.img.dip.url;
        img.onload = ((d) => {
          return () => {
            ctx.drawImage(img, 22, 60+d, 90, 90);

            ctx.moveTo(22,60+d);
            ctx.lineTo(90+22,90+60+d);
            ctx.moveTo(22,60+90+d);
            ctx.lineTo(90+22,60+d);
            ctx.stroke();
          }
        })(d);
        ctx.fillStyle = "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Consiglio di Dipartimento", 230, 72+d);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Azzurra)", 355, 72+d);
        $scope.drawText(ctx, $scope.text.dip, 290, 130+d);

        d += 125;
      }

      if ($scope.check.cdl) {
        ctx.fillStyle="#8e8e8e";
        ctx.fillRect(12,57+d,475,100);
        ctx.moveTo(125,145+d);
        ctx.lineTo(450,145+d);

        let img = new Image;
        img.src = $scope.img.cdl.url;
        img.onload = ((d) => {
          return () => {
            ctx.drawImage(img, 22, 60+d, 90, 90);

            ctx.moveTo(22,60+d);
            ctx.lineTo(90+22,90+60+d);
            ctx.moveTo(22,60+90+d);
            ctx.lineTo(90+22,60+d);
            ctx.stroke();
          }
        })(d);
        ctx.fillStyle= "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Corso di Laurea", 230, 72+d);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Obliqua)", 330, 72+d);
        $scope.drawText(ctx, $scope.text.cdl, 290, 130+d);

        d += 125;
      }

      if ($scope.check.med) {
        ctx.fillStyle="#e6e1de";
        ctx.fillRect(12,57+d,475,100);
        ctx.moveTo(125,145+d);
        ctx.lineTo(450,145+d);

        ctx.rect(22,60+d,90,90);
        ctx.moveTo(22,60+d);
        ctx.lineTo(90+22,90+60+d);
        ctx.moveTo(22,60+90+d);
        ctx.lineTo(90+22,60+d);
        ctx.stroke();

        ctx.fillStyle= "#000";
        ctx.font = "bold 12px Arial";
        ctx.fillText("Scuola di Medicina", 230, 72+d);
        ctx.font = "12px Arial";
        ctx.fillText("(Scheda Bianca Obliqua)", 360, 72+d);
        $scope.drawText(ctx, $scope.text.med, 290, 130+d);

        d += 125;
      }

      ctx.stroke();

      ctx.font = "bold 20px Arial";
      ctx.fillText("Si vota dalle 9.00 alle 19.00".toUpperCase(), 250, d+55);

      ctx.font = "bold 15px Arial";
      ctx.fillText("Esibire un valido documento di riconoscimento", 250, d+75);
      ctx.fillText("Utilizzare ESCLUSIVAMENTE la matita fornita al seggio", 250, d+95);
    };

    $scope.drawText = (ctx, text, x, y) => {
      text = text.toUpperCase();
    	ctx.fillStyle = "#000";
    	ctx.textAlign = "center";

    	//Set the text styles
    	ctx.font = $scope.fontSize + "px Arial";
    	ctx.strokeText(text, x, y);
    	ctx.fillText(text, x, y);
    };

    $scope.create = () => {
       let uri = document.getElementById('myCanvas').toDataURL("image/png");
       downloadImage(uri, "Santino.png");
    };

    /* Save the img */
    function downloadImage(uri,name) {
    	let link = document.createElement('a');
    	link.setAttribute("href", uri);
    	link.setAttribute('download', name);

    	if (document.createEvent) {
    		let event = document.createEvent('MouseEvents');
    		event.initEvent('click', true, true);
    		link.dispatchEvent(event);
    	}
    	else
    		link.click();
    }

    $scope.addText();

	});

}());
