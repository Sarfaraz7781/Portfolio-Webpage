// function send_mail() {
//     var name = jQuery("#name").val();
//     var email = jQuery("#email").val();
//     var subject = jQuery("#subject").val();
//     var message = jQuery("#message").val();
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var flag = 0;
//     if (name == "") {
//         jQuery("#name").addClass('border-danger');
//         jQuery("#val_user_name").html("Your Name is Required");
//         flag = 1;
//     } else {
//         jQuery("#name").removeClass('border-danger');
//         jQuery("#val_user_name").html("");
//     }

//     if (email == "") {
//         jQuery("#email").addClass('border-danger');
//         jQuery("#val_user_email").html("Please Enter Email");
//         flag = 1;
//     } else if (!email.match(mailformat)) {
//         jQuery("#email").addClass('border-danger');
//         jQuery("#val_user_email").html("Please Enter Valid Email");
//         flag = 1;
//     } else {
//         jQuery("#email").removeClass('border-danger');
//         jQuery("#val_user_email").html("");
//     }

//     if (subject == "") {
//         jQuery("#subject").addClass('border-danger');
//         jQuery("#val_subject").html("Subject is Required");
//         flag = 1;
//     } else {
//         jQuery("#subject").removeClass('border-danger');
//         jQuery("#val_subject").html("");
//     }
//     if (message == "") {
//         jQuery("#message").addClass('border-danger');
//         jQuery("#val_message").html("Please Describe your thoughts");
//         flag = 1;
//     } else {
//         jQuery("#message").removeClass('border-danger');
//         jQuery("#val_message").html("");
//     }

//     if (flag == 1) {
//         return false;
//     }

//     var data = {
//         "name": name,
//         "email": email,
//         "subject": subject,
//         "message": message,
//     };

//     jQuery.ajax({
//         type: "POST",
//         crossOrigin: true,
//         url: "process_form.php",
//         data: data,
//         success: function(response) {
//             if (response == '1') {
//                 jQuery('#suce_message').show();
//                 jQuery("#contact-form")[0].reset();
//             } else {
//                 jQuery('#err_message').show();
//             }
//         }
//     }); }


//     <script>
//   const form = document.getElementById("contact-form");
//   const status = document.getElementById("form-status");

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const data = new FormData(form);

//     try {
//       const res = await fetch("https://formspree.io/f/yourFormID", {
//         method: "POST",
//         body: data,
//         headers: {
//           Accept: "application/json",
//         },
//       });

//       if (res.ok) {
//         status.textContent = "✅ Thank you! Your message has been sent.";
//         status.style.color = "#198754";
//         status.style.display = "block";
//         form.reset();
//       } else {
//         status.textContent = "❌ Oops! Something went wrong.";
//         status.style.color = "#dc3545";
//         status.style.display = "block";
//       }
//     } catch (err) {
//       status.textContent = "⚠️ Network error. Try again later.";
//       status.style.color = "#ffc107";
//       status.style.display = "block";
//     }
//   });
// </script>





// document.getElementById("contact-form").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     const response = await fetch("https://formspree.io/f/xanevjkg", {
//       method: "POST",
//       body: formData,
//       headers: { 'Accept': 'application/json' }
//     });

//     const successMsg = document.getElementById("suce_message");
//     const errorMsg = document.getElementById("err_message");

//     if (response.ok) {
//       successMsg.style.display = "inline";
//       errorMsg.style.display = "none";
//       form.reset();
//     } else {
//       successMsg.style.display = "none";
//       errorMsg.style.display = "inline";
//     }
//   });



document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const successMsg = document.getElementById("suce_message");
    const errorMsg = document.getElementById("err_message");

    try {
        const response = await fetch("https://formspree.io/f/xanevjkg", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            successMsg.style.display = "inline";
            errorMsg.style.display = "none";
            form.reset();
        } else {
            throw new Error("Form submission failed");
        }
    } catch (err) {
        successMsg.style.display = "none";
        errorMsg.style.display = "inline";
    }
});