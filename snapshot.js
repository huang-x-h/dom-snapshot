html2canvas(document.querySelector('.issue-details')).then(function(canvas) {
    canvas.toBlob(function(blob) {
        saveAs(blob, "snapshot.png");
    });
});