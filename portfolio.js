$(() => {

//                                 Example
// $('#InformativeInformation').hide()
//         //jq grabbing/selected ^ when fist load and hide all info in InformativeInformation

// const showInfo = () => {
// $('#InformativeInformation').slideDown(1000)
//         //Info is displaded in a slow motion slide down to repopulate info.
// $('#home').on('click', showInfo )
//         //To show the info that is hidden

//Home Button //toggle, or delete hide to have page lode with home displayed

//                     Navigation Bar 
// $('#home').hide()

const contentHome = () => {
    $('#home').slideDown(1000)
    $('#biography').hide()
    $('#resume').hide()
    $('#projects').hide()
    $('#link').hide()
} 
$('#homeB').on('click', contentHome)

// //Biography button   
$('#biography').hide()

const showBiography = () => {
    $('#biography').slideDown(1000)
    $('#home').hide()
    $('#resume').hide()
    $('#projects').hide()
    $('#link').hide()
}  
    $('#biographyB').on('click', showBiography)
    // $('#biography').hide()
    //click function to show bio once clicked
   

// // //Resume Button
$('#resume').hide()

const showResume = () => {
    $('#resume').slideDown(1000)
    $('#biography').hide()
    $('#home').hide()
    $('#projects').hide()
    $('#link').hide()
}
$('#resumeB').on('click', showResume)


// // //Projects Button
$('#projects').hide()

const showProjects = () => {
    $('#projects').slideDown(1000)
    $('#resume').hide()
    $('#biography').hide()
    $('#home').hide()
    $('#link').hide()
}
    $('#projectsB').on('click', showProjects)



// // //Links
$('#link').hide()

const showLinks = () => {
    $('#link').slideDown(1000)
    $('#projects').hide()
    $('#resume').hide()
    $('#biography').hide()
    $('#home').hide()
    
}
    $('#linkB').on('click', showLinks)

// Failed attempt
// const darkMode = () => {
//     $('body').css ('background', 'black')
//     $('body').css ('color', 'white')
//     $('body').css ('color', 'white')
// }
// $('#dark').on ('click', darkMode)


//                   //Welcome Modal

const $openBtn2 = $('#openModal2');
const $modalH = $('#modalH');
const $closeBtn2 = $('#close2');

const openModalH = () => {
    $modalH.css('display', 'block');
}
const closeModalH = () => {
    $modalH.css('display', 'none');
}

$openBtn2.on('click', openModalH);
$closeBtn2.on('click', closeModalH);
setTimeout(openModalH, 100)


//                     Projects Modal
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

const openModal = () => {
    $modal.css('display', 'block');
}
const closeModal = () => {
    $modal.css('display', 'none');
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);
setTimeout(openModal, 5000)



//Carousel--Links

let currentImgIndex = 0;
let numOfImages = $('.carousel-images').children().length - 1

    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
           } else {
            currentImgIndex = 0
           }
        $('.carousel-images').children().eq(currentImgIndex).css('display','block')
       })
      

    // $('.previous').on('click', () => {
    //     $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    //     if(currentImgIndex > 0) {
    //         currentImgIndex --
    //       } else {
    //         currentImgIndex = numOfImages
    //       }
    //     $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

    })
