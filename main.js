/* Data */
const benefitsData = [
    {
        title: "Brainstorm Better",
        description: "Get AI-assisted ideas instantly for your next article, blog or post.",
        icon: "/images/BenefitCard/brain.png"
    },
    {
        title: "Write with Ease",
        description: "Let Inkwell structure and rewrite your content to perfection.",
        icon: "/images/BenefitCard/pen.png"
    },
    {
        title: "Polish Like a Pro",
        description: "Grammar, tone, clarity — auto-enhance your drafts like a human editor.",
        icon: "/images/BenefitCard/brain.png"
    },
    {
        title: "Stay in Flow",
        description: "No switching tabs — generate, write, refine all in one interface.",
        icon: "/images/BenefitCard/pen.png"
    },
];

const FAQSData = [
  {
    question: "What is the purpose of this website?",
    answer: "This website is designed to provide information and resources about various topics.",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support by emailing"
  },
  {
      question: "What are the payment options available?",
      answer: "We accept credit cards, PayPal, and bank transfers.",
  },
  {
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously and use encryption to protect your information.",
  },
  {
      question: "How can I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
  },
]

const LargeCardsData = [
  {
    title: "High-Converting Pages, Made Easy",
    description: "From headlines to hero sections, write copy that keeps visitors engaged and moving",
    image: "/images/FeatureCard/newspaper.png",
  },
  {
    title: "Scroll-Stopping Posts, Instantly.",
    description: "Create captions, threads and hashtags that match your tone and grow your reach.",
    image: "/images/FeatureCard/socials.png",
  },
]

const SmallCardsData = [
    {
        title: "Emails That Actually Get Read",
        description: "Craft sbject lines, body copy, and CTAS that boost open rates and clicks",
        icon: "/images/FeatureCard/email.png",
        alt: "Small Card 1",
    },
    {
        title: "Smart Study Support",
        description: "Draft essays, summarize readings, polish your thesis, with AI that respects your voice.",
        icon: "public/images/FeatureCard/study-support.png",
        alt: "Small Card 2",
    },
    {
        title: "Write Long-Form That Flows",
        description: "Generate outlines, intros and full articles that sound like you, only faster and smarter.",
        icon: "/images/FeatureCard/long-form-content.png",
        alt: "Small Card 3",
    },
]

const HowItWorksData = [
  {
    title: "Choose A Template",
    description: "From blog posts to product descriptions, pick your format and tone. Whether you are writing something formal, fun, persuasive, or personal, Penwise adapts to your needs.",
  },
    {
        title: "Describe Your Idea",
        description: "Drop in a short prompt, idea or goal. Yo don't need to overthink it., even a sentence is enough. Penwise understands context and fills in the rest with structured, smart and relevant content.",
    },
    {
        title: "Let Penwise Write",
        description: "Once you havee shared your idea, Penwise will generate a draft in seconds. You can then edit, refine and add your own touch to the content. It's like having a writing partner by your side.",
    },
]

const NavData = [
    {
        title: 'Features',
        link: '#features'
    },
    {
        title: 'Benefits',
        link: '#benefits'
    },
    {
        title: 'Pricing',
        link: '#pricing'
    },
    {
        title: 'Signin',
        link: '#signin'
    }
]

const TestimonialsData = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    rating: 5,
    testimonial: "Inkwell has transformed my writing process. It's like having a personal editor that understands my style.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    designation: "Content Writer",
    rating: 4,
    testimonial: "The AI suggestions are spot on! I love how it helps me brainstorm new ideas.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Alice Johnson",
    designation: "Marketing Specialist",
    rating: 5,
    testimonial: "Inkwell has made my job so much easier. I can focus on strategy while it handles the writing.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Bob Brown",
    designation: "Freelance Writer",
    rating: 4,
    testimonial: "I was skeptical at first, but Inkwell has exceeded my expectations. It's a game changer for writers.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Charlie Davis",
    designation: "Blogging Enthusiast",
    rating: 5,
    testimonial: "The AI-generated content is surprisingly good. I use it for my blog and have seen a boost in traffic.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  }
]

/* Components */

const BenefitCard = (title, description, icon, index) => {
    const isEven = index % 2 === 0;

    return `
        <div class="min-w-[300px] md:w-[350px] sm:h-[350px] flex-shrink-0 border border-secondary rounded p-6 flex flex-col justify-between items-end gap-4 bg-white shadow-lg">
            ${
                isEven 
                ? 
                `
                    <div class="text-left flex flex-col justify-end gap-4">
                        <h3 class="text-5xl font-extrabold">${title}</h3>
                        <p class="w-[200px]">${description}</p>
                    </div>

                    <img src="${icon}" alt="${title} icon" class="w-28 h-28" />
                `
                :
                `
                    <img src="${icon}" alt="${title} icon" class="w-28 h-28" />

                    <div class="text-left flex flex-col justify-end gap-4">
                        <h3 class="text-5xl font-extrabold">${title}</h3>
                        <p class="w-[200px]">${description}</p>
                    </div>
                `
            }
        </div>
    `;
}

const FAQCard = ({ question, answer }) => {
    return `
        <div id="faq-card" class="col-span-1">
            <details class="border border-secondary rounded-lg group overflow-hidden">
                <summary class="p-8 rounded-lg group-open:rounded-t-lg group-open:rounded-b-none border border-secondary cursor-pointer font-semibold bg-gray-100 hover:bg-gray-200 select-none flex justify-between items-center group-open:bg-black group-open:text-white">
                    <p>${question}</p>
                    <p>+</p>
                </summary>
                <div class="rounded-b-lg px-4 py-2 text-primary bg-secondary">
                    ${answer}
                </div>
            </details>
        </div>
    `;
};

const FeatureLargeCard = ({title, description, image, index}) => {
    return `
    <div key=${index} id="feature-large-card" class="col-span-1 h-[250px] rounded p-6 bg-secondary text-primary shadow-lg flex flex-col justify-start items-end gap-4">
        <div class="w-full text-left">
            <h3 class="text-xl font-bold">${title}</h3>
            <p class="text-sm">${description}</p>
        </div>
        <img src="${image}" alt="${title} image" class="min-w-20 min-h-20 sm:w-32 sm:h-32 object-cover rounded" />
    </div>
    `;
}

const FeatureSmallCard = ({title, description, icon, alt, index}) => {
    const isEven = index % 2 === 0;

    return `
        <div key=${index} id="feature-small-card" class="col-span-1 rounded p-6 bg-gray-200 shadow-lg flex flex-col justify-between items-center gap-4">
            ${
                isEven 
                ? 
                `
                    <div class="flex flex-col justify-center items-center gap-2">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <p class="text-xs">${description}</p>
                    </div>

                    <img src="${icon}" alt="${alt} icon" class="w-8 h-8 sm:w-16 sm:h-16" />
                `
                :
                `
                    <img src="${icon}" alt="${alt} icon" class="w-16 h-16" />

                    <div class="flex flex-col justify-center items-center gap-2">
                        <h3 class="text-xl font-bold">${title}</h3>
                        <p class="text-xs">${description}</p>
                    </div>
                `
            }
        </div>
    `;
}

const HowItWorksCard = ({ title, description, index }) => {
    return `
        <div key="${index}" id="testimonial-card" class="-rotate-12 absolute top-20 right-5 max-w-[350px] h-[450px] flex-shrink-0 border border-primary rounded p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
            <p class="text-left text-6xl font-extrabold">0${index+1}</p>

            <div class="text-left flex flex-col justify-center items-left gap-6">
                <h3 class="text-xl text-left font-bold">${title}</h3>
                <p class=" line-clamp-4">${description}</p>
            </div>
        </div>
    `;
};

const NavButton = ({title, link}) => {
    return`
        <div>
            <button 
                class="nav-button px-4 py-2 rounded-full hover:bg-primary hover:text-secondary">
                    ${title}
            </button>
        </div>
    `;
}

const Star = ({ size = 24, fill = "#facc15", stroke = "#fbbf24", strokeWidth = 1.5 }) => {
  return `
    <svg 
      width="${size}" 
      height="${size}" 
      viewBox="0 0 24 24" 
      fill="${fill}" 
      stroke="${stroke}" 
      stroke-width="${strokeWidth}" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 
                       18.18 21.02 12 17.77 5.82 21.02 
                       7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  `;
};

const TestimonialCard = ({name, designation, rating, testimonial, image, index}) => {
    const isEven = index % 2 === 0;
    return `

        <div key=${index} id="testimonial-card" class="w-[200px] md:w-[350px] h-[350px] sm:h-[450px] flex-shrink-0 border border-secondary rounded p-6 flex flex-col justify-between items-center gap-4 ${isEven ? 'bg-primary text-secondary' : 'bg-secondary text-primary'} shadow-lg">
            <div class="flex flex-col justify-center items-center gap-2 text-center">
                <img src="${image}" alt="${name} image" class="w-16 h-16 rounded-full" />
                <h3>${name}</h3>
                <p>${designation}</p>
            </div>

            <div class="flex gap-1">
            ${Array.from({ length: 5 }, (_, i) => 
                i < rating 
                ? '<span class="text-yellow-500">★</span>' 
                : '<span class="text-gray-300">★</span>'
            ).join('')}
            </div>
                 
            <p class="text-center line-clamp-4">${testimonial}</p>
        </div>
    `;
}

const BenefitCards = benefitsData.map((benefit, index) => {
        return BenefitCard(benefit.title, benefit.description, benefit.icon, index);
    })

try {
  document.getElementById("app").innerHTML = `
      <div class="relative sm:h-full flex flex-col">
      <!-- Navbar Section-->
        <!-- Mobile Toggle -->
        <div class="sm:hidden flex justify-end px-4 mt-4 items-center gap-2 relative z-50">
            <img id="menu-toggle" src="public/images/Navbar/menu.png" alt="menu" class="w-[30px] h-[30px] cursor-pointer"/>
            <img id="menu-close" src="public/images/Navbar/cancel.png" alt="menu" class="hidden w-[30px] h-[30px] cursor-pointer"/>    </div>

        <!-- Absolute Mobile Menu -->
        <div id="mobile-menu" class="hidden sm:hidden absolute top-10 right-10 left-10 flex flex-col items-center gap-2 bg-secondary text-white p-4 rounded-lg shadow-lg z-40">
            <a href="/" class="font-bold italic"><img src="/images/logo.svg" alt="Penwise" class="w-fll h-full"/></a>
            ${NavData.map((item, index) => NavButton({ title: item.title, link: item.link, index })).join('')}
        </div>

        <div class="mt-10 hidden sm:flex justify-center items-center">
            <nav class="w-fit pl-4 p-2 bg-secondary text-white rounded-full flex justify-center items-center gap-8">
                <a href="/" class="font-bold italic"><img src="/images/logo.svg" alt="Penwise" class="w-8 h-8"/></a>
                ${NavData.map((item, index) => NavButton({ title: item.title, link: item.link, index })).join('')}
            </nav>
        </div>

        <!-- Hero Section -->
        <section class="flex-1 text-center flex flex-col justify-center items-center gap-6 mb-4">
            <h1 class="m-2 text-6xl font-extrabold">Catch the Flow. </br> Create Without Limits.</h1>
            <p class="m-2">Fuel your creativity with an AI writing assistant that helps you </br> branstorm, draft, and refine content -- all in one intelligent workspace.</p>

            <div class="flex flex-col md:flex-row gap-4">
                <button class="p-4 rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary shadow-md shadow-black">Start Writing</button>
                <button class="p-4 rounded-full border border-secondary bg-primary text-secondary hover:bg-secondary hover:text-primary">View Templates</button>
            </div>

        </section>

        <!-- Scroller Section-->
        <section id="scroller" class="sm:h-20 py-4 bg-secondary flex flex-col sm:flex-row justify-center items-center overflow-x-auto">
            <div class="w-full sm:w-[85%] sm:mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-10">
                <img src="/images/Scroller/Notion.png" alt="Notion" class="w-auto h-10 object-cover" />
                <img src="/images/Scroller/Medium.png" alt="Medium" class="w-auto h-10 object-cover" />
                <img src="/images/Scroller/Trello.png" alt="Trello" class="w-auto h-10 object-cover" />
                <img src="/images/Scroller/Slack.png" alt="Slack" class="w-auto h-10 object-cover" />
                <img src="/images/Scroller/Mailchimp.png" alt="Mailchimp" class="w-auto h-10 object-cover" />
            </div>
        </section>

        <img src="/images/HeroSection/waves1.png" alt="waves" class="z-[-10] opacity-10 absolute top-0 right-0 "/>
        <img src="/images/HeroSection/waves2.png" alt="waves" class="z-[-10] opacity-25 absolute bottom-0 left-0 "/>
      </div>
      <div class="pb-20">

    <!-- Benefits Section-->  
    <section id="benefits" class="w-full mx-auto my-4 sm:my-24 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div class="w-[85%] mx-auto sm:w-2/5 sm:ml-[7.5%] flex flex-col justify-center items-start gap-6">
            <h2 class="font-bold">Why Penwise?</h2>
            <p class="style-oneliner">Smarter Writing<br /> <span class="pt-2 block">Starts Here.</span></p>
            <p class="max-w-md">Inkwell isn't just another AI tool, its your creative partner. From sparking freash ideas to polishing your final draft, Inkwell adapts to your tone, voice, and needs</p>
        </div>

        <div class="benefit-scroll mx-2 sm:w-3/5 sm:flex-1 flex flex-col sm:flex-row gap-2 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
            ${BenefitCards}
        </div>
    </section>

    <!-- Features Section -->
      <section id="features" class="w-[85%] mx-auto my-20">
              <div>
                  <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div class="sm:w-1/2 flex flex-col justify-start sm:justify-center items-start gap-6">
                          <h2 class="font-bold">What You Can Create</h2>
                          <p class="style-oneliner">InkWell Can Write</br>Just About Anything.</p>
                      </div>
                      <p class="max-w-[450px]">Inkwell isn't just another AI tool, its your creative partner. From sparking freash ideas to polishing your final draft, Inkwell adapts to your tone, voice, and needs</p> 
                  </div>
      
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      ${LargeCardsData.map((card, index) => FeatureLargeCard({title: card.title, description: card.description, image: card.image, index})).join('')}
                  </div>
      
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                      ${SmallCardsData.map((card, index) => FeatureSmallCard({title: card.title, description: card.description, icon: card.icon, alt: card.alt, index})).join('')}
                  </div>
      
      
                  <div>
                  </div>
              </div>
          </section>

    <!-- Testimonials Section -->
      <section id="testimonials" class="my-20">
        <div class="w-[85%] mx-auto flex flex-col justify-center items-center gap-4 mb-8">
            <h2>Testimonials</h2>
            <p class="text-center style-oneliner">What Writers Like </br> You Are Saying</p>
        </div>
        <div class="ml-[7.5%] benefit-scroll flex-1 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth">
        ${
            TestimonialsData.map((testimonial, index) => 
                TestimonialCard({
                    name: testimonial.name,
                    designation: testimonial.designation,
                    rating: testimonial.rating,
                    testimonial: testimonial.testimonial,
                    image: testimonial.image,
                    index
                })
            )
        }
        </div>
    </section>

    <!-- How It Works Section -->
      <section id="how-it-works" class="relative bg-secondary text-primary sm:h-[1500px]">
        <div class="w-[85%] h-full mx-auto py-6 sm:py-20 flex flex-col justify-between items-start gap-8">
            <div class="flex flex-col justify-center items-start gap-4">
                <h2 class="text-sm font-bold">How It Works</h2>
                <p class="text-4xl sm:text-6xl font-black">Write Smarter</br>in 3 Simple</br> Steps</p>
            </div>
            <div class="w-full h-full flex flex-col justify-center items-center gap-4">
                <div key="1" id="testimonial-card" class="-rotate-6 md:-rotate-12 md:absolute md:top-[15%] md:right-[10%] max-w-[350px] h-[350px] md:h-[350px] flex-shrink-0 border border-primary rounded p-3 md:p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
                    <p class="text-left text-6xl font-extrabold">01</p>

                    <div class="text-left flex flex-col justify-center items-left gap-6">
                        <h3 class="text-xl text-left font-bold">${HowItWorksData[0].title}</h3>
                        <p class=" line-clamp-4">${HowItWorksData[0].description}</p>
                    </div>
                </div>
                
                <div key="2" id="testimonial-card" class="rotate-6 md:rotate-12 md:absolute md:top-[42%] md:left-[10%] min-w-[150px] max-w-[350px] h-[350px] md:h-[350px] flex-shrink-0 border border-primary rounded p-3 md:p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
                    <p class="text-left text-6xl font-extrabold">02</p>

                    <div class="text-left flex flex-col justify-center items-left gap-6">
                        <h3 class="text-xl text-left font-bold">${HowItWorksData[1].title}</h3>
                        <p class=" line-clamp-4">${HowItWorksData[1].description}</p>
                    </div>
                </div>

                <div key="3" id="testimonial-card" class="-rotate-6 md:-rotate-12 md:absolute md:top-[70%] md:right-[10%] min-w-[150px] max-w-[350px] h-[350px] md:h-[350px] flex-shrink-0 border border-primary rounded p-3 md:p-6 flex flex-col justify-between items-start gap-4 bg-secondary text-primary shadow-lg">
                    <p class="text-left text-6xl font-extrabold">03</p>

                    <div class="text-left flex flex-col justify-center items-left gap-6">
                        <h3 class="text-xl text-left font-bold">${HowItWorksData[2].title}</h3>
                        <p class=" line-clamp-4">${HowItWorksData[2].description}</p>
                    </div>
                </div>

                <img src="/images/HowItWorks/arrow.png" alt="arrow" class="hidden md:block w-32 h-32 lg:w-36 lg:h-36 xl:h-40 xl:w-40 2xl:h-48 2xl:w-48 md:absolute md:top-[30%] md:left-[25%] lg:top-[30%] lg:left-[35%] xl:top-[25%] xl:left-[45%] 2xl:top-[25%] 2xl:left-[45%] 2xl:rotate-12"/>
                <img src="/images/HowItWorks/arrow.png" alt="arrow" class="hidden md:block scale-x-[-1] w-32 h-32 lg:w-36 lg:h-36 xl:h-40 xl:w-40 2xl:h-48 2xl:w-48 md:absolute md:top-[55%] md:right-[25%] lg:top-[55%] lg:right-[35%] xl:top-[55%] xl:left-[45%] 2xl:-rotate-12"/>
                
            </div>

            <button class="p-4 rounded-full bg-primary text-secondary shadow-[0_0_10px_white] hover:bg-primary hover:text-secondary">
                Start Writing
            </button>
        </div>
    </section>

    <!-- FAQs Section -->
     <section id="faqs" class="w-[85%] mx-auto my-20 gap-4">
        <div class="w-full flex flex-col justify-center items-start gap-6">
            <h2 class="text-sm font-bold">Frequently Asked Questions</h2>
            <p class="style-oneliner">Still Curious?</br>We Got Answers</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            ${FAQSData.map((faq) => FAQCard({ question: faq.question, answer: faq.answer })).join('')}
        </div>
    </section>

    <!-- Get Started Section -->
     <section 
        id="get-started" 
        class="relative w-[85%] mx-auto text-center bg-secondary text-primary py-16 rounded-xl flex flex-col justify-center items-center gap-8
        ">
        <div class="  flex flex-col justify-center items-center gap-4">
            <h2 class="style-oneliner">Step into Your Writing Flow</h2>
            <p class="text-xs sm:text-sm max-w-[200px] sm:max-w-[300px]">Join 200,000+ writers who are already using Inkwell to unlock their creativity and boost their productivity.</p>
        </div>
        <div>
            <button class="p-4 rounded-full bg-primary text-secondary shadow-[0_0_10px_white] hover:bg-primary hover:text-secondary">Catch the flow</button>
        </div>
    </section>
    </div>
  `;

  console.log("✅ app.js loaded and rendered");
} catch (error) {
  console.error("❌ Rendering error:", error);
  document.getElementById("app").innerHTML = `<pre style="color: red;">${error.message}</pre>`;
}

console.log("✅ app.js is loaded");

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu && menuClose) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    menuToggle.classList.add("hidden");
    menuClose.classList.remove("hidden");
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });
}

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-button")) {
        document.querySelectorAll(".nav-button").forEach(btn => {
            btn.classList.remove("bg-primary", "text-secondary")
            btn.classList.add("text-primary")
        });

        e.target.classList.remove("text-primary")
        e.target.classList.add("bg-primary", "text-secondary")
        
    }
})

// In your JS file
const scrollContainer = document.querySelector('.benefit-scroll');

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollContainer.classList.add('active');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  scrollContainer.scrollLeft = scrollLeft - walk;
});

