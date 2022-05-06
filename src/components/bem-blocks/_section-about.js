document.querySelector('.about__video-main__play').addEventListener('click', function() {
    document.querySelector('.about__video-main__play').style.display = "none";
    document.querySelector('.youtube__container').style.display = "block";
    document.querySelector('.youtube').setAttribute('src' , 'https://www.youtube.com/embed/HbRX2QXT9AM?rel=0&amp;modestbranding=1&amp;controls=2&amp;showinfo=0&amp;fs=1&amp;wmode=opaque&amp;autoplay=1&amp;enablejsapi=1&amp;')
});
