$(document).ready(function(){
    $('.images-container').slick({
      dots: true, // Navigasyon noktalarını göster
      infinite: true, // Sonsuz döngü
      speed: 500, // Geçiş hızı (ms)
      slidesToShow: 3, // Görünecek slayt sayısı
      slidesToScroll: 1, // Kaydırma için kaç slayt atlanacak
      responsive: [
        {
          breakpoint: 1024, // Ekran boyutu 1024px olduğunda...
          settings: {
            slidesToShow: 2, // Görünecek slayt sayısını 2 yap
            slidesToScroll: 1 // Kaydırma için kaç slayt atlanacak
          }
        },
        {
          breakpoint: 768, // Ekran boyutu 768px olduğunda...
          settings: {
            slidesToShow: 1, // Görünecek slayt sayısını 1 yap
            slidesToScroll: 1 // Kaydırma için kaç slayt atlanacak
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.slick-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000 // 2 saniyede bir slayt geçişi
    });
  });
  


  new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    },
    methods: {
        validateForm(action) {
            if (action === 'submit') {
                // Check if all fields are filled
                if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.message) {
                    alert('Please fill in all fields.');
                    return;
                }

                // Validate email format
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(this.formData.email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

                // If all validations pass, submit the form
                this.submitForm();
            } else if (action === 'reset') {
                // Reset the form
                this.resetForm();
            }
        },
        submitForm() {
            // Submit the form data (You can implement this according to your backend)
            console.log('Form submitted:', this.formData);




            let htmlContent = `
            <html>
            <head>
                <title>veri tutma sayfası</title>
            </head>
            <body>
                <h2>Submitted Form Data</h2>
                <p><strong>İsim:</strong> ${this.formData.name}</p>
                <p><strong>Email:</strong> ${this.formData.email}</p>
                <p><strong>Telefon No:</strong> ${this.formData.phone}</p>
                <p><strong>Eklemek istedikleriniz:</strong> ${this.formData.message}</p>
            </body>
            </html>
            `;
            // Bilgiler.html dosyasına yazma
            this.writeToFile('bilgiler.html', htmlContent);
        },
        writeToFile(fileName, content) {
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(content));
            element.setAttribute('download', fileName);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);





        },
        resetForm() {
            // Reset form data
            this.formData.name = '';
            this.formData.email = '';
            this.formData.phone = '';
            this.formData.message = '';
        }
    }
});
