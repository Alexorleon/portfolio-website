document.getElementById('btncv').addEventListener('click', function() {
  
  const link = document.createElement('a');
  link.href = '../assets/downloads/cv_ru.pdf';
  link.download = 'cv_ru.pdf';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});