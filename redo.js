const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },

    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];


const linksToTheLogo = document.createElement('a');
const bullets = document.createElement('ul');
const wholeBody = document.querySelector('.container');

wholeBody.appendChild(bullets);



for (let index = 0; index < sites.length; index++) {
    const element = sites[index];
    const aLinksToTheLogo = document.createElement('a');
    const image = document.createElement('img');

    image.setAttribute('src',element.logo); //faster and less buggy
    aLinksToTheLogo.appendChild(image);
    aLinksToTheLogo.setAttribute('href', element.address); // =)

    const totalLinksToTheLogo = document.createElement('li');
    totalLinksToTheLogo.appendChild(aLinksToTheLogo);
    bullets.appendChild(totalLinksToTheLogo)

}


// const logoLink = document.createElement('a');
// const navLinks = document.createElement('ul');
// const navContainer = document.querySelector('.container');

// navContainer.appendChild(navLinks);


// //create an img tag and put it inside of the <a>

// for (let index = 0; index < sites.length; index++) {  //loop thru the sites
//     const element = sites[index]; //set the site address to element
//     const aTag = document.createElement('a'); //gives them an a tag
//     const image = document.createElement('img') //creates an img tag 

//     image.setAttribute('src',element["logo"] ) ; //same as line 37
//     aTag.appendChild(image); //append the image child element to the a tag. 
//     aTag.setAttribute ('href', element.address); //same as line 35
//     // iTag.setAttribute ('img', image)
//     const listItem = document.createElement('li');
//     listItem.appendChild(aTag); //put the a inside the listItem
//     navLinks.appendChild(listItem)
// }