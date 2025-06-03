// Image data from media-gallery directory
const images = [
    { src: 'src/images/media-gallery/WhatsApp-Image-2021-03-13-at-13.55.49.jpeg', alt: 'Media Image 1' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-09-114125.jpg', alt: 'Media Image 2' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-09-113841.jpg', alt: 'Media Image 3' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-09-113002.jpg', alt: 'Media Image 4' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-125148.png', alt: 'Media Image 5' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123912.png', alt: 'Media Image 6' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123731.png', alt: 'Media Image 7' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123650.png', alt: 'Media Image 8' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123623.png', alt: 'Media Image 9' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123554.png', alt: 'Media Image 10' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123530.png', alt: 'Media Image 11' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123432.png', alt: 'Media Image 12' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123414.png', alt: 'Media Image 13' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123337.png', alt: 'Media Image 14' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123323.png', alt: 'Media Image 15' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123121.png', alt: 'Media Image 16' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-123054.png', alt: 'Media Image 17' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-114823.png', alt: 'Media Image 18' },
    { src: 'src/images/media-gallery/Screenshot-2021-03-05-114747.png', alt: 'Media Image 19' },
    { src: 'src/images/media-gallery/Screenshot_20210306-134723_Facebook.jpg', alt: 'Media Image 20' },
    { src: 'src/images/media-gallery/155519702_10158027978607544_6382755055647921750_o.jpg', alt: 'Media Image 21' },
    { src: 'src/images/media-gallery/130878032_415161836521733_7560123451843296258_o.jpg', alt: 'Media Image 22' },
    { src: 'src/images/media-gallery/122239014_107678377793780_1435996269232179580_o.jpg', alt: 'Media Image 23' },
    { src: 'src/images/media-gallery/120030323_10157665590392544_7840253036112548442_o.jpg', alt: 'Media Image 24' },
    { src: 'src/images/media-gallery/87680695_2453342618312749_8954429207778164736_o.jpg', alt: 'Media Image 25' },
    { src: 'src/images/media-gallery/87440692_2453342698312741_7734766406767476736_o.jpg', alt: 'Media Image 26' },
    { src: 'src/images/media-gallery/84764857_10157002047637544_3359037078309437440_n.jpg', alt: 'Media Image 27' },
    { src: 'src/images/media-gallery/84585611_10156985810472544_207883808765116416_n.jpg', alt: 'Media Image 28' },
    { src: 'src/images/media-gallery/84021049_2430691963911148_8459568247073669120_o.jpg', alt: 'Media Image 29' },
    { src: 'src/images/media-gallery/84003940_2418500855130259_4738535760095870976_o.jpg', alt: 'Media Image 30' },
    { src: 'src/images/media-gallery/83644756_2418500641796947_1828908627822379008_n.jpg', alt: 'Media Image 31' },
    { src: 'src/images/media-gallery/83617089_2429922277321450_5530568544552484864_o.jpg', alt: 'Media Image 32' },
    { src: 'src/images/media-gallery/83125805_2415652112081800_6730485302139289600_n.jpg', alt: 'Media Image 33' },
    { src: 'src/images/media-gallery/83114416_2429922287321449_2074925063206862848_o.jpg', alt: 'Media Image 34' },
    { src: 'src/images/media-gallery/82395081_2415652032081808_3543567393244577792_n.jpg', alt: 'Media Image 35' },
    { src: 'src/images/media-gallery/75328807_10156714550397544_9055766418506645504_o.jpg', alt: 'Media Image 36' },
    { src: 'src/images/media-gallery/53700283_10156179716727544_8173626053403607040_n.jpg', alt: 'Media Image 37' },
    { src: 'src/images/media-gallery/50940802_2132767493703598_8452924057220808704_o.jpg', alt: 'Media Image 38' },
    { src: 'src/images/media-gallery/34030220_1952543141726035_2888506853933711360_o.jpg', alt: 'Media Image 39' },
    { src: 'src/images/media-gallery/32856048_1040469419442264_293804943054209024_n.jpg', alt: 'Media Image 40' },
    { src: 'src/images/media-gallery/32841524_1040946552727884_2516732002300854272_n.jpg', alt: 'Media Image 41' },
    { src: 'src/images/media-gallery/32730640_1620562244725266_3550189159073185792_o.jpg', alt: 'Media Image 42' },
    { src: 'src/images/media-gallery/32545705_1039521199537086_7721991786754736128_o.jpg', alt: 'Media Image 43' },
    { src: 'src/images/media-gallery/28575736_2027714914167199_2082674461388067147_n.jpg', alt: 'Media Image 44' },
    { src: 'src/images/media-gallery/27912462_2021182734820417_1219420966889730441_o.jpg', alt: 'Media Image 45' },
    { src: 'src/images/media-gallery/27539983_10214152828790882_2923878166105116399_n.jpg', alt: 'Media Image 46' },
    { src: 'src/images/media-gallery/27369021_1893115651002118_430745775112673473_o.jpg', alt: 'Media Image 47' },
    { src: 'src/images/media-gallery/27021960_1887573491556334_4719481167464565739_o-1.jpg', alt: 'Media Image 48' },
    { src: 'src/images/media-gallery/26993594_2007547376183953_5234181488506686089_n.jpg', alt: 'Media Image 49' },
    { src: 'src/images/media-gallery/26951708_2009170759354948_6204183592057708714_o.jpg', alt: 'Media Image 50' },
    { src: 'src/images/media-gallery/26910850_1887020314944985_2123467471718415933_o-1.jpg', alt: 'Media Image 51' },
    { src: 'src/images/media-gallery/26814751_1230700460408160_3204673901537059310_n.jpg', alt: 'Media Image 52' },
    { src: 'src/images/media-gallery/26814530_2029739243709492_8197729325009760957_n.jpg', alt: 'Media Image 53' },
    { src: 'src/images/media-gallery/22426327_1843087159338301_4551668776841957812_o.jpg', alt: 'Media Image 54' },
    { src: 'src/images/media-gallery/14615632_1661841747462844_8762229286909452429_o.jpg', alt: 'Media Image 55' }
];

// Configuration
const imagesPerPage = 24; // Show 24 images per page
const totalPages = Math.ceil(images.length / imagesPerPage);
let currentPage = 1;
let currentImageIndex = 0;

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const pagination = document.getElementById('pagination');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const loading = document.getElementById('loading');

// Contact Toggle Functionality
const contactToggle = document.getElementById("contactToggle");
const contactOptions = document.getElementById("contactOptions");
const helpText = document.getElementById("helpText");
const toggleIcon = document.getElementById("toggleIcon");
let isOpen = false;

// Initialize the gallery
function initGallery() {
    showLoading();
    renderGallery();
    renderPagination();
    setupLightbox();
    hideLoading();
}

// Show loading spinner
function showLoading() {
    loading.style.display = 'flex';
}

// Hide loading spinner
function hideLoading() {
    loading.style.display = 'none';
}

// Render gallery images with staggered animation
function renderGallery() {
    galleryGrid.innerHTML = '';
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, images.length);

    for (let i = startIndex; i < endIndex; i++) {
        const image = images[i];
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${(i - startIndex) * 0.1}s`; // Stagger the animations
        galleryItem.innerHTML = `<img src="${image.src}" alt="${image.alt}" data-index="${i}">`;
        galleryItem.addEventListener('click', () => openLightbox(i));
        galleryGrid.appendChild(galleryItem);
    }
}

// Render pagination buttons
function renderPagination() {
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            showLoading();
            renderGallery();
            renderPagination();
            // Scroll to top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setTimeout(hideLoading, 500); // Hide loading after animation
        });
        pagination.appendChild(button);
    }
}

// Setup lightbox functionality
function setupLightbox() {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

// Open lightbox with selected image
function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = images[index].src;
    lightbox.style.display = 'block';
    // Trigger reflow
    lightbox.offsetHeight;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Show previous image in lightbox
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImage.style.transform = 'scale(0.9)';
    lightboxImage.src = images[currentImageIndex].src;
    // Trigger reflow
    lightboxImage.offsetHeight;
    lightboxImage.style.transform = 'scale(1)';
}

// Show next image in lightbox
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImage.style.transform = 'scale(0.9)';
    lightboxImage.src = images[currentImageIndex].src;
    // Trigger reflow
    lightboxImage.offsetHeight;
    lightboxImage.style.transform = 'scale(1)';
}

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', initGallery);

// Contact Toggle Functionality
contactToggle.addEventListener("click", function () {
    isOpen = !isOpen;

    if (isOpen) {
        // Hide help text
        helpText.classList.remove("opacity-100");
        helpText.classList.add("opacity-0", "pointer-events-none");

        // Show contact options
        contactOptions.classList.remove(
            "opacity-0",
            "translate-y-4",
            "pointer-events-none"
        );
        contactOptions.classList.add(
            "opacity-100",
            "translate-y-0",
            "pointer-events-auto"
        );

        // Rotate icon
        toggleIcon.style.transform = "rotate(45deg)";

        // Change button color
        contactToggle.classList.remove("bg-[#5d1966]");
        contactToggle.classList.add("bg-purple-800", "hover:bg-purple-900");
    } else {
        // Show help text
        helpText.classList.remove("opacity-0", "pointer-events-none");
        helpText.classList.add("opacity-100");

        // Hide contact options
        contactOptions.classList.remove(
            "opacity-100",
            "translate-y-0",
            "pointer-events-auto"
        );
        contactOptions.classList.add(
            "opacity-0",
            "translate-y-4",
            "pointer-events-none"
        );

        // Reset icon rotation
        toggleIcon.style.transform = "rotate(0deg)";

        // Reset button color
        contactToggle.classList.remove("bg-purple-800", "hover:bg-purple-900");
        contactToggle.classList.add("bg-[#5d1966]");
    }
});

// Close contact options when clicking outside
document.addEventListener("click", function (event) {
    if (
        isOpen &&
        !contactToggle.contains(event.target) &&
        !contactOptions.contains(event.target) &&
        !helpText.contains(event.target)
    ) {
        contactToggle.click();
    }
});
