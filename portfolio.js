$(() => {

// $('#InformativeInformation').hide()
        //jq grabbing/selexcted ^ when fist load and hide all info in InformativeInformation

// const showInfo = () => {
// $('#InformativeInformation').slideDown(1000)
//         //Info is displaded in a slow motion slide down to repopulate info.
// $('#home').on('click', showInfo )
//         //To show the info that is hidden



//Home Button

// $('#contentBiography').hide()

// const showHome = () => {
//     $('#contentHome').slideDown(1000)
// } 
//     $('#contentHome').on('click', showInfo)


//Biograpghy button

$('#contentHome').hide()

const showBiography = () => {
    $('#contentBiography').slideDown(1000)
    // $('#contentRedumr').hide()
    //hinding home content
}
$('#contentBiography').on('click', showcontentBiography)
//click function to show bio once clicked


// // //Resume Button

// $('#contentBiography').hide()
// const showResume = () => {
//     $('#contentResume').slideDown(1000)
//     $('#contentResume').on('click', showInfo)
// }


// // //Projects Button
// $('#contentResume').hide()

// const showProjects = () => {
//     $('#contentProjects').slideDown(1000)
//     $('#contentProjects').on('click', showInfo)
// }


// // //Links
// $('#contentProjects').hide()

// const showLinks = () => {
//     $('#contentLinks').slideDown(1000)
//     $('#contentLinks').on('click', showInfo)
// }


})

// const buttonHome = $('#home')
// buttonHome.on('click', buttonClick)

// const buttonBiography = $('#biography')
// const buttonResume = $('resume')
// const buttonProjects = $('project')
// const buttonLinks = $('links')

// let buttonClick = function(e) {
//     alert('Button: '+ecurrentTarget.id);
//     //+ may not work
// }
//     buttonHome.on('click', buttonClick)
//     buttonBiography.on('click', buttonClick)
//     buttonResume.on('click', buttonClick)
//     buttonProjects.on('click', buttonClick)
//     buttonLinks.on('click', buttonClick)

    
//         // $('#text').append($('<p>').text('You swapped tools'))
//     })



// $('#Home').on('click', () => {
//     if (homeOn == false) {
//         homehomebutton()
//     }
// }



        // const $ulBiography = $('<ul>') 

        // const $li = $('<li>').addClass('navigation')

        //     // let $div = $('<div>').addClass(flex-container)
        //     let $button = $('<button>').addClass(flex-container).text('Biograpghy')
        //     //append
        // }


// const biography = () => {

// }

// //link direct link to resume when button is clicked
// const resume = () => {

// }

// const  projects = () => {

// } 

// const  links = () => {

// }












// ///////////              Creating Buttons
    

// <div id="button-navigation">
// <button id="home">Home</button>
// <button id="biography">Biography</button>
// {/* <button id="resume">Resume</button> */}
// <button id="projects">Projects</button>
// <button id="links">Links</button> 

// <button id="resume">Resume


// </button>


// </div>

// //attaching a link to the Resume button
// //





// // $('mainPage').on('click', Rreseume)





// //Errors
// // let box = document.createElement('div')
// // //First page, Into, Four Buttons, Picture

// // const $navigationPanel = $('<div>').addClass('square')
// // $('body').append($square);



// // const mainPageButtons = (mainContent) => {
// //     let $div = $('<div>').addClass('flex-button-box')
// //     $('#flex-button-box').css('display', 'flex');


// // }
// // $div.append()



// const $navigationPanel = [
//     {
//         buttonClicked: 'Home', 
//     }, 
//     {
//         buttonClicked: 'Biography',
//     },
//     {
//         buttonClicked: 'Resume'
//     }, 
//     {
//         buttonClicked: 'Projects',
//     },
//     {
//         buttonClicked: 'Links',
//     }
// ]
//created an array of button functions


//needs loop to loop back to main page from other button tabs once 1 of 4 other buttons are pressed.
//potential modele to give general direction on to navigate the page. 
//if user clicks home, the page will consists of a welcome, and picture. 

// const home = () => {
//     let $home = $('home')
//     $('home').removeClass('selected')
//     $home.addClass('selected')
//     console.log ($home)
// }
// $('body').append($home)


//JQ dot methods to hide, start, and hide.
//.hide()