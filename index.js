// Ketika tombol di klik
$("#toggleButton").click(function() {
    // Mengubah status tampilan konten
    $("#content").toggle();

    // Mengubah teks tombol
    if ($("#content").is(":visible")) {
      $(this).text("Hide");
    } else {
      $(this).text("Show");
    }
  });