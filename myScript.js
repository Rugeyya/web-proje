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
  
