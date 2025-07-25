//  Add toggle for nabar overlay for mobile

document.addEventListener("DOMContentLoaded", () => {
  const Toggle = () => {
    const overlay = document.querySelector(".overlay");
    const hamburger = document.getElementById("hamburger");
    const closeIcon = document.getElementById("close-icon1");

    hamburger.addEventListener("click", () => {
      hamburger.classList.add("active");
      closeIcon.classList.remove("active");
      overlay.classList.remove("active");
    });

    closeIcon.addEventListener("click", () => {
      hamburger.classList.remove("active");
      closeIcon.classList.add("active");
      overlay.classList.add("active");
    });
  };

  Toggle();
});

// Add a toggle for question answer section //

const QuestionToggle = () => {
  document.querySelectorAll(".question-content").forEach((questionBlock) => {
    const plus = questionBlock.querySelector("#plus-Icon");
    const minus = questionBlock.querySelector("#minusIcon");
    const answer = questionBlock.nextElementSibling;

    // Hide the  all answers and reset all icons first
    plus.addEventListener("click", () => {
      // Hide all others
      document
        .querySelectorAll(".answer")
        .forEach((a) => a.classList.add("hidden"));
      document
        .querySelectorAll("#plus-Icon")
        .forEach((p) => p.classList.remove("active"));
      document
        .querySelectorAll("#minusIcon")
        .forEach((m) => m.classList.add("hidden"));

      // show current answer and update icon
      plus.classList.add("active");
      minus.classList.remove("hidden");
      answer.classList.remove("hidden");
    });

    minus.addEventListener("click", () => {
      minus.classList.add("hidden");
      plus.classList.remove("active");
      answer.classList.add("hidden");
    });
  });
};

QuestionToggle();

// Lottie Animation for  Website page
const anim = lottie.loadAnimation({
  container: document.getElementById("lottie-container2"),
  renderer: "canvas",
  loop: true,
  autoplay: true,
  path: "online store.json",
  rendererSettings: {
    preserveAspectRatio: "none",
  },
});

// anim.addEventListener("DOMLoaded", function () {
//   const canvas = document.querySelector("#lottie-container canvas");
//   if (canvas) {
//     canvas.removeAttribute("width");
//     canvas.removeAttribute("height");
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // if (window.innerWidth >= 768) {
//     // nitialize Locomotive
//     const scrollContainer = document.querySelector(".main");
//     const locoScroll = new LocomotiveScroll({
//       el: scrollContainer,
//       smooth: true,
//       lerp: 0.07,
//     });

//     // GSAP ScrollTrigger with Locomotive
//     gsap.registerPlugin(ScrollTrigger);
//     ScrollTrigger.scrollerProxy(scrollContainer, {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollContainer.style.transform ? "transform" : "fixed",
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".main");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    lerp: 0.07,
  });

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });

  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // GSAP Animations
  gsap.to(".animate-text-hero", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  });

  gsap.to(".animate-card", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".animate-section",
      start: "top 95%",
      end: "bottom 100%",

      scrub: true,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animation feature frame //

  gsap.to(".animate-feature-frame", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-feature-frame",
      start: "top 80%",
      end: "bottom 95%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animate feature section //

  gsap.to(".animate-items", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-feature-section",
      start: "top 80%",
      end: "bottom 95%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animate-Segment-based-on-tags-products-purchased //

  gsap.to(".animate-Segment-based-on-tags-products-purchased-img", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".Segment-based-on-tags-products-purchased-main-content",
      start: "top 95%",
      end: "bottom 95%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  //  animate-Automated-campaigns-for-welcome-emails //

  gsap.to(".animate-Automated-campaigns-for-welcome-emails-img", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".Automated-campaigns-for-welcome-emails-main-content",
      start: "top 95%",
      end: "bottom 95%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  //  animate-get-descovered//

  gsap.to(".animate-get-descovered-img", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".get-descovered-main-content",
      start: "top 95%",
      end: "bottom 95%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animation-qoute-section  //

  gsap.to(".animate-qoute", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-qoute-section",
      start: "top 95%",
      end: "bottom 98%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animation gallery-section //

  gsap.to(".animate-gallery-items ", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-gallery-groups",
      start: "top 90%",
      end: "bottom 98%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animate-store-feature-items-section //

  gsap.to(".animate-store-feature-items", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-store-feature-items-section",
      start: "top 95%",
      end: "bottom 98%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animate-Turn-your-fans-section //

  gsap.to(".animate-Turn-your-fans-list-items", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-Turn-your-fans-section",
      start: "top 95%",
      end: "bottom 98%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });

  // animate asked questions //

  gsap.to(".animate-questions ", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,

    scrollTrigger: {
      trigger: ".animate-asked-questions",
      start: "top 80%",
      end: "bottom 98%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
      scroller: ".main",
    },
  });
});

// if (localStorage.getItem("isLoggedIn") !== "true") { //desable for vercel
//   window.location.href = "login.html";
// }

// check login state when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("Loginbtn");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (loginBtn && isLoggedIn === "true") {
    // loginBtn.textContent = "Logout";

    loginBtn.onclick = () => {
      // localStorage.removeItem("isLoggedIn");
      // alert("👋 Logged out successfully!");
      window.location.href = "login.html";
    };
  }
});

// toggle for subnav
function toggleSubnav() {
  const subnav = document.getElementById("subnav");
  const arrow = document.getElementById("arrowIcon");
  const dropdownTrigger1 = document.getElementById("dropdownTrigger1");
  const dropdownText = document.querySelector("#dropdownText");

  const isHidden = subnav.classList.contains("hidden"); //  check

  // toggle visibility
  subnav.classList.toggle("hidden");

  if (isHidden) {
    // It's currently hidden → now opening

    dropdownTrigger1.style.backgroundColor = "#10242F"; // active bg
    dropdownText.style.color = "#E1EDF2"; // active text
    arrow.style.color = "#E1EDF2"; // active text
  } else {
    // It's visible → now closing

    dropdownTrigger1.style.backgroundColor = "#F5F5F5"; // reset bg color
    dropdownText.style.color = "#10242F"; // reset text color
    arrow.style.color = "#10242F"; // reset text color
  }
  arrow.classList.toggle("rotate-180"); //  arrow rotateswhen dropdown open
}

function toggleSubnav2() {
  const subnav = document.getElementById("subnav2");
  const arrow = document.getElementById("arrowIcon2");
  const dropdownTrigger = document.getElementById("dropdownTrigger");

  const isHidden = subnav.classList.contains("hidden");
  subnav.classList.toggle("hidden"); // Show/hide dropdown

  if (isHidden) {
    // dropdown is open, so open it and apply active styles
    subnav.classList.remove("hidden");
    dropdownTrigger.style.backgroundColor = "#10242F"; // active background
    dropdownTrigger.style.color = "#E1EDF2"; // active text-color
  } else {
    // dropdown is not  open, so close it and reset styles
    subnav.classList.add("hidden");
    dropdownTrigger.style.backgroundColor = ""; // reset to default
    dropdownTrigger.style.color = "#10242F"; // reset to default
    arrow.classList.add("rotate-180");
  }
  arrow.classList.toggle("rotate-180"); //  arrow rotateswhen dropdown open
}
