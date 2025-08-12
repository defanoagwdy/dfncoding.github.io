document.getElementById('greetBtn').onclick = function() {
    alert('Halo Kawan! Semangat belajar coding di DFNCODING!');

    this.textContent = 'Terima kasih sudah klik!';
    showCurrentTime();
    changeBackgroundColor();
};



function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#faebd7', '#ffe4e1', '#e6e6fa', '#f5f5dc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function showCurrentDateTime(){
    let now = new Date();
    let today = new Date();
    let day = today.getDate();
    let month =today.getMonth() + 1; // January is 0
    let year = today.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let dateString = day = '/' + month + '/' + year;
    let timeString = hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

    let dateTimeString = dateString + '/' + timeString;

    let dateTimeDisplay =document.getElementById('dateTimeDisplay');
    if (!dateTimeDisplay) {
        dateTimeDisplay = document.createElement('p');
        dateTimeDisplay.id = 'dateTimeDisplay';
        document.body.appendChild(dateTimeDisplay);
    }
    dateTimeDisplay.textContent = 'tanggal sekarang :'  +  dateTimeString;

      
}

showCurrentDateTime();