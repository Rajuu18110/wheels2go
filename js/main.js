// testimonial
let itemsTest = document.querySelectorAll('.carousel .carousel-item.testislide')

itemsTest.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsTest[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// Car modal
let itemsCarModal = document.querySelectorAll('.carousel .carousel-item.carmodal')

itemsCarModal.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsCarModal[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// Car company
let itemsCarCompany = document.querySelectorAll('.carousel .carousel-item.carcompany')

itemsCarCompany.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = itemsCarCompany[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})