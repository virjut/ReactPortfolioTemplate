import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jutta",
    lastName: "Virta",
    initials: "jv", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: ':D',
            text: 'fueled by joy and happiness'
        },
        {
            emoji: '🌎',
            text: 'based in the FI'
        },
        {
            emoji: "💼",
            text: "Junior developer at Academic Work"
        },
        {
            emoji: "📧",
            text: "jutta563@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/virjut",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jutta-virta-a7a3bb204",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Jutta. I'm Junior Full stack developer. i'm career changer from nurse to coder and still working as a traineelevel or entrylevel. Open-minded person. You should hire me!",
    skills:
        {
            famialiarWith: ['C#', 'javascript', 'react', 'git', 'github', 'html', 'css'],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'cyckling',
            emoji: ''
        },
        {
            label: 'camping',
            emoji: ''
        },
        {
            label: 'dancing'
            
        }
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Portfolio Template",
            live: "Not available.", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/virjut/ReactPortfolioTemplate", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Diary",
            live: "Not available.",
            source: "https://github.com/virjut/DiaryMVC",
            image: mock2
        },
        {
            title: "Rock-Paper-Scissors (back-end)",
            live: "Not available.",
            source: "https://github.com/virjut/Rock-paper-scissors",
            image: mock3
        },
        {
            title: "Coming soon or later this year..",
            live: "Not available.",
            source: "https://github.com/virjut",
            image: mock4
        },
       
    ]
}