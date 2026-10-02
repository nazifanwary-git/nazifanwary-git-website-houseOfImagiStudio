
// date

const dateEl = document.querySelector('.date');
dateEl.innerHTML = new Date().getFullYear();

// navs

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})

// fixed navbar

const navbar = document.getElementById('nav');
const toTopBtn = document.querySelector('.back-to-top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 603) {
        toTopBtn.classList.add('show-link');
    } else {
        toTopBtn.classList.remove('show-link');
    }
})

// smooth scroll

const scrollLinks = document.querySelectorAll('.scroll-links');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navbarHeight = navbar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const isFixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navbarHeight;

        if (!isFixedNav) {
            position = position - navbarHeight
        }

        if (window.innerWidth < 900) {
            position = position + linksContainerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        })

        linksContainer.style.height = 0;
    })
})

// api things

const payload = {
    "about": `Hello there! We are a group of human artists based in Semarang, Indonesia. With the spirit of young
                    ones, we are striving to bring the best services and products to creative creators. We are
                    specializing in long term works; such as sequential pages, game designs & assets, and others.<br>
                    どうも！HOI です、よろしくお願いします。 ご依頼がございましたら、ぜひメールやノートにご連絡をしてください。`,

    "services": [
        "Character Concept Art",
        "BW Sequential Pages",
        "Colored Sequential Pages",
        "Cover Art Illustration",
        "Visual Novel Sprites",
        "Visual Novel Background",
        "2D Game Assets",
        "VTuber Assets",
    ],

    "testimonials": [
        {
            id: 1,
            userName: "justindwill86",
            rating: 5,
            desc: "House of Imagi is the team you need to work with if you're looking for background for your visual novel. I can't stress enough how good they are. They are with you every step of the way."
        },
        {
            id: 2,
            userName: "draconatos",
            rating: 5,
            desc: "The seller have been very polite and committed to the work. Every step of the work process have been shared to allow a smooth and effective way to make changes and talk about ideas and suggestions. Solid 5 stars! Will definitely return for more orders!"
        },
        {
            id: 3,
            userName: "chibishay534",
            rating: 5,
            desc: "They are very communicative and fast. I'm so happy I finally got to commission House of Imagi! Top notch professionals."
        },
        {
            id: 4,
            userName: "aardrinn",
            rating: 5,
            desc: "Houseofimagi did a fantastic job taking my reference pics and expanding them into fullbodies! They did beautiful lineart, and I 100% recommend them as a responsive, helpful creator!"
        },
        {
            id: 5,
            userName: "lcyruswhelch",
            rating: 5,
            desc: "Excellent work by houseofimagi, as always! They took my concept and brought it to life. I've never had a single issue with them. Very professional, with open communication at every step of the process."
        },
        {
            id: 6,
            userName: "msadelaide",
            rating: 5,
            desc: "This was my first experience and nothing could have gone better! Great communication, very professional!"
        },
    ],

    "works": [
        {
            id: 1,
            workCategory: "new works",
            catalog: [
                {
                    comissionTitle: "various vtuber illustration",
                    comissionYear: 2023,
                    commissionType: "vtuber ych illustration",
                    commissionImages: [
                        {
                            imageName: "image1",
                            source: "./images/artwork1.jpg"
                        },
                        {
                            imageName: "image2",
                            source: "./images/artwork2.jpg"
                        }
                    ]
                },
                {
                    comissionTitle: "tsukiko kitsune lore",
                    comissionYear: 2023,
                    commissionType: "landscape comic page",
                    commissionImages: [
                        {
                            imageName: "image3",
                            source: "./images/artwork3.jpg"
                        },
                        {
                            imageName: "image4",
                            source: "./images/artwork4.jpg"
                        }
                    ]
                }
            ]
        },
    ]


}

// about me

const aboutMeContainer = document.querySelector('.content-about');

aboutMeContainer.innerHTML = payload.about;

// services

const serviceList = document.querySelector('.service-list');

function displayServiceList() {
    serviceList.innerHTML = "";

    payload.services.forEach(service => {
        serviceList.innerHTML += `<li>${service}</li>`
    });
}


// testimonials

const testimonialContainer = document.querySelector('.testimonial-list');

function displayTestimonials() {
    testimonialContainer.innerHTML = '';

    payload.testimonials.forEach(({ userName, rating, desc }) => {
        let ratingStars = '';

        for (let i = 0; i < rating; i++) {
            ratingStars += '⭐';
        }

        if (rating < 5) {
            for (let i = rating; i < 5; i++) {
                ratingStars += '☆';
            }
        }

        testimonialContainer.innerHTML += `
        <li class="testimony-card">
                        <!-- testimony card header -->
                        <div class="testimony-header">
                            <h5 class="testimony-user">${userName}</h5>
                            <div class="testimony-separator"></div>
                            <span class="testimony-rating">${ratingStars}</span>
                        </div>

                        <div class="testimony-content">
                            <p>${desc}</p>
                        </div>
                    </li>
        `
    })
}

// works

const worksContainer = document.querySelector(".works-container");

function displayWorks() {
    worksContainer.innerHTML = '';

    payload.works.forEach(work => {
        let workCardHTML = '';
        let itemCardHTML = '';

        work.catalog.forEach(item => {
            let imagesHTML = '';

            item.commissionImages.forEach(image => {
                imagesHTML += `
            <img src="${image.source}" alt="${image.imageName}" class="work-image"/>
            `;
            })

            itemCardHTML += `
        <div class="works-image-container">
            ${imagesHTML}
        </div>

        <div class="works-image-desc">
            <p>${item.comissionYear} | ${item.comissionTitle}</p>
            <p>type of commission: ${item.commissionType}</p>
        </div>
        `;
        })

        workCardHTML += `
    <article class="works-card">
        <div class="works-sub-header">
            <div class="separator-yellow"></div>
            <h4>${work.workCategory}</h4>
        </div>

        ${itemCardHTML}
    </article>
    `;

        worksContainer.innerHTML += workCardHTML;
    })
}


// display after content loaded

window.addEventListener("DOMContentLoaded", () => {
    displayServiceList();
    displayTestimonials();
    displayWorks();
    setupLightbox();
})

// lightbox functionalities

function setupLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);


    worksContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('work-image')) {
            const selectedImg = document.createElement('img');
            selectedImg.src = e.target.src;
            selectedImg.classList.add('lightbox-img')
            lightbox.classList.add('active');
            if (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(selectedImg);
        }
    })

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    })
}