// Controls of de items contents

// Set items content
changeItemContent(1);

function changeItemContent(idItemContent) {
    if (typeof $('.item-content').length != 'undefined' && $('.item-content').length > 0) {
        for (let i = 1; i <= $('.item-content').length; i++) {
            if (i == idItemContent) {
                $(`#item-content-${i}`).removeClass('d-none');
                $(`#item-content-${i}`).addClass('d-flex');
                $(`#item-btn-${i}`).addClass('active');
            } else {
                $(`#item-content-${i}`).removeClass('d-flex');
                $(`#item-content-${i}`).addClass('d-none');
                $(`#item-btn-${i}`).removeClass('active');
            }
        }
    } else {
        console.log("Não foi encontrato nenhum item.")
    }
}

// Show scroll up button
$(window).scroll(()=>{
    if ($(window).scrollTop() > 600) {
        $('.div-button-scroll-top').removeClass('d-none');

    } else {
        $('.div-button-scroll-top').addClass('d-none');
    }
});

function scrollToTop() {
    $('html, body').animate({scrollTop : 0},200);
    return false;
}