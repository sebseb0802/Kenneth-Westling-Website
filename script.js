/* Strava button */
const StravaButton = document.createElement('StravaButton');

StravaButton.style.width = '50px';
StravaButton.style.height = '50px';

StravaButton.style.border = 'none';

StravaButton.style.position = 'fixed';
/*StravaButton.style.bottom = '370px';
StravaButton.style.right = '20px'; */
StravaButton.style.bottom = '20px';
StravaButton.style.right = '700px';

StravaButton.style.cursor = 'pointer';

StravaButton.addEventListener('click', () => {
    window.location.href = "https://www.strava.com/athletes/12444464"
});

StravaButton.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/2699/PNG/512/strava_logo_icon_170697.png')";
/*Decrease image size*/
StravaButton.style.backgroundSize = "cover";
/*Center the image*/
StravaButton.style.backgroundPosition = "center";

document.body.appendChild(StravaButton);

/* Linkedin button */
const LinkedinButton = document.createElement('LinkedinButton');

LinkedinButton.style.width = '50px';
LinkedinButton.style.height = '50px';

LinkedinButton.style.border = 'none';

LinkedinButton.style.position = 'fixed';
/*LinkedinButton.style.bottom = '300px';
LinkedinButton.style.right = '20px'; */
LinkedinButton.style.bottom = '20px';
LinkedinButton.style.right = '610px';

LinkedinButton.style.cursor = 'pointer';

LinkedinButton.addEventListener('click', () => {
    window.location.href = "https://www.linkedin.com/in/kennethwestling";
});

LinkedinButton.style.backgroundImage = "url('https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg')";
/*Decrease image size*/
LinkedinButton.style.backgroundSize = "cover";
/*Center the image*/
LinkedinButton.style.backgroundPosition = "center";

document.body.appendChild(LinkedinButton);

/* Instagram button */
const InstagramButton = document.createElement('InstagramButton');

InstagramButton.style.width = '50px';
InstagramButton.style.height = '50px';

InstagramButton.style.border = 'none';

InstagramButton.style.position = 'fixed';
/*InstagramButton.style.bottom = '230px';
InstagramButton.style.right = '20px'; */
InstagramButton.style.bottom = '20px';
InstagramButton.style.right = '520px';

InstagramButton.style.cursor = 'pointer';

InstagramButton.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/in/kennethwestling";
});

InstagramButton.style.backgroundImage = "url('https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png')";
/*Decrease image size*/
InstagramButton.style.backgroundSize = "cover";
/*Center the image*/
InstagramButton.style.backgroundPosition = "center";

document.body.appendChild(InstagramButton);