// Initialize and add the map
function initMap() {
  const mapDiv = document.querySelector(".map");
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };

  const map = new google.maps.Map(mapDiv, {
    zoom: 14,
    center: loc
  });

  //The Market, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
