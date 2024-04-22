function sendMail() {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        email_id: document.getElementById("emailSender").value,
        subject: document.getElementById("subjectSender").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_pyd1u1j", "template_lwiifqo", tempParams).then(function (res) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Mail Sent Successfully!",
            showConfirmButton: false,
            timer: 1000,
        });
        // alert("Success" + res.status);
    });
}


$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Fullstack Developer", "Data Engineer", "DSA enthusiast"],
        typeSpeed: 100,
        fadeOut: true,
        loop: true,
    });
    var typed = new Typed(".typing-2", {
        strings: ["Fullstack Developer", "Data Engineer", "DSA enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
    });
});

const btnScrollToTop = $("#btnScrollToTop");

btnScrollToTop.on("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});