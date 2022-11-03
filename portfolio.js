$(() => {

// $('#InformativeInformation').hide()
//         //jq grabbing/selected ^ when fist load and hide all info in InformativeInformation

// const showInfo = () => {
// $('#InformativeInformation').slideDown(1000)
//         //Info is displaded in a slow motion slide down to repopulate info.
// $('#home').on('click', showInfo )
//         //To show the info that is hidden



//Home Button

$('#home').hide()

const contentHome = () => {
    $('#home').slideDown(1000)
} 
$('#homeB').on('click', contentHome)


// //Biography button   
$('#biography').hide()

const showBiography = () => {
    $('#biography').slideDown(1000)
        //hiding home content
}  
    $('#biographyB').on('click', showBiography)
    // $('#biography').hide()
    //click function to show bio once clicked
   

// // //Resume Button

$('#resume').hide()

const showResume = () => {
    $('#resume').slideDown(1000)
}
$('#resumeB').on('click', showResume)


// // //Projects Button

$('#projects').hide()

const showProjects = () => {
    $('#projects').slideDown(1000)
}
    $('#projectsB').on('click', showProjects)



// // //Links

$('#link').hide()

const showLinks = () => {
    $('#link').slideDown(1000)
}
    $('#linkB').on('click', showLinks)

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

// Attempted button clicks. Failed


//when element is clicked, show the content
// $(e).click(showHomeContent(){
//     //home id/button.....contentHome=div for home
//     $('#home').click(contentHome) {
//         //inputed the div name to html that needs to be selected.....
//         $('contentHome').html('Selected')
//     }
//  }