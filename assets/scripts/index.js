// Initializes scrolling animations
AOS.init();

// Menu icon switch on hover
$('#about-li').hover(
    () => {
        $('#about-icon').removeClass('fa-solid').addClass('fa-regular')
    }, 
    () => {
        $('#about-icon').removeClass('fa-regular').addClass('fa-solid')
    }
)

$('#folio-li').hover(
    () => {
        $('#folio-icon').removeClass('fa-solid fa-folder').addClass('fa-regular fa-folder-open')
    }, 
    () => {
        $('#folio-icon').removeClass('fa-regular fa-folder-open').addClass('fa-solid fa-folder')
    }
)

$('#resume-li').hover(
    () => {
        $('#resume-icon').removeClass('fa-file fa-solid').addClass(' fa-regular fa-file-lines')
    }, 
    () => {
        $('#resume-icon').removeClass('fa-regular fa-file-lines').addClass('fa-file fa-solid')
    }
)