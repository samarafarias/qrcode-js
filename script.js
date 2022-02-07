function qrCode() {   
    var inputUser = document.querySelector('textarea').value;
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld&chl=';
    var contentQrCode = googleChartAPI + encodeURIComponent(inputUser);
    var text = document.getElementById('result');
    
    document.querySelector('#qrCodeImg').src = contentQrCode;

    text.textContent = 'Your QR Code has been generated successfully!';
}

