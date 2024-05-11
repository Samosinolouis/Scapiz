var pdfjsLib = window['pdfjs-dist/build/pdf'];

function renderPDF(url, containerId) {
  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    var pdfContainer = document.getElementById(containerId);

    pdfDoc_.getPage(1).then(function(page) {
      var viewport = page.getViewport({scale: 1.5});
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      canvas.height = viewport.height;
      canvas.width = viewport.width;
      pdfContainer.appendChild(canvas);

      page.render(renderContext);
    });
  });
}

renderPDF('upload/ICT/SAMOSINO_RESLIFE1-ACTIVITY5.pdf', 'pdfContainer1');
renderPDF('upload/ICT/PORTILLO_RESLIFE1-ACTIVITY5.pdf', 'pdfContainer2');
