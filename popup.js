document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function () {
        var selector = document.querySelector('#txt').value;

        chrome.tabs.executeScript(null, {
            code: `
        var el = document.querySelector('${selector}');
        if (el) {
            html2canvas(el).then(function (canvas) {
                canvas.toBlob(function (blob) {
                    saveAs(blob, 'snapshot.png');
                });
            });
        } else {
            window.alert('${selector}元素不存在，请重新输入');
        }`});
        window.close();
    });
});