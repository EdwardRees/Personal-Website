let HIDDEN = true;
let kumashiro_citation,
  love_citation,
  delpit_citation,
  mang_citation,
  ayers_citation,
  nieto_citation;
$("document").ready(() => {
  if (HIDDEN) {
    $("#Kumashiro_overview").hide();
    $("#Kumashiro_evaluation").hide();
    $("#Kumashiro_usage").hide();
    $("#Kumashiro_citation").hide();
    $("#Kumashiro_image_citation").hide();

    $("#Love_overview").hide();
    $("#Love_evaluation").hide();
    $("#Love_usage").hide();
    $("#Love_citation").hide();
    $("#Love_image_citation").hide();

    $("#Delpit_overview").hide();
    $("#Delpit_evaluation").hide();
    $("#Delpit_usage").hide();
    $("#Delpit_citation").hide();
    $("#Delpit_image_citation").hide();

    $("#MANG_overview").hide();
    $("#MANG_evaluation").hide();
    $("#MANG_usage").hide();
    $("#MANG_citation").hide();
    $("#MANG_image_citation").hide();

    $("#Ayers_overview").hide();
    $("#Ayers_evaluation").hide();
    $("#Ayers_usage").hide();
    $("#Ayers_citation").hide();
    $("#Ayers_image_citation").hide();

    $("#Nieto_overview").hide();
    $("#Nieto_evaluation").hide();
    $("#Nieto_usage").hide();
    $("#Nieto_citation").hide();
    $("#Nieto_image_citation").hide();

    $("#Kumashiro_citation_toggle").text("Show Citations");
    $("#Love_citation_toggle").text("Show Citations");
    $("#Delpit_citation_toggle").text("Show Citations");
    $("#MANG_citation_toggle").text("Show Citations");
    $("#Ayers_citation_toggle").text("Show Citations");
    $("#Nieto_citation_toggle").text("Show Citations");
    kumashiro_citation = true;
    love_citation = true;
    delpit_citation = true;
    mang_citation = true;
    ayers_citation = true;
    nieto_citation = true;
  }
});
$("#Kumashiro_toggle_overview").click(() => {
  $("#Kumashiro_overview").toggle();
});
$("#Kumashiro_toggle_evaluation").click(() => {
  $("#Kumashiro_evaluation").toggle();
});
$("#Kumashiro_toggle_usage").click(() => {
  $("#Kumashiro_usage").toggle();
});
$("#Kumashiro_citation_toggle").click(() => {
  kumashiro_citation = !kumashiro_citation;
  $("#Kumashiro_citation").toggle();
  $("#Kumashiro_image_citation").toggle();
  if (kumashiro_citation) {
    $("#Kumashiro_citation_toggle").text("Show Citations");
  } else {
    $("#Kumashiro_citation_toggle").text("Hide Citations");
  }
});

$("#Love_toggle_overview").click(() => {
  $("#Love_overview").toggle();
});
$("#Love_toggle_evaluation").click(() => {
  $("#Love_evaluation").toggle();
});
$("#Love_toggle_usage").click(() => {
  $("#Love_usage").toggle();
});
$("#Love_citation_toggle").click(() => {
  love_citation = !love_citation;
  $("#Love_citation").toggle();
  $("#Love_image_citation").toggle();
  if (love_citation) {
    $("#Love_citation_toggle").text("Show Citations");
  } else {
    $("#Love_citation_toggle").text("Hide Citations");
  }
});

$("#Delpit_toggle_overview").click(() => {
  $("#Delpit_overview").toggle();
});
$("#Delpit_toggle_evaluation").click(() => {
  $("#Delpit_evaluation").toggle();
});
$("#Delpit_toggle_usage").click(() => {
  $("#Delpit_usage").toggle();
});
$("#Delpit_citation_toggle").click(() => {
  delpit_citation = !delpit_citation;
  $("#Delpit_citation").toggle();
  $("#Delpit_image_citation").toggle();
  if (delpit_citation) {
    $("#Delpit_citation_toggle").text("Show Citations");
  } else {
    $("#Delpit_citation_toggle").text("Hide Citations");
  }
});

$("#MANG_toggle_overview").click(() => {
  $("#MANG_overview").toggle();
});
$("#MANG_toggle_evaluation").click(() => {
  $("#MANG_evaluation").toggle();
});
$("#MANG_toggle_usage").click(() => {
  $("#MANG_usage").toggle();
});
$("#MANG_citation_toggle").click(() => {
  mang_citation = !mang_citation;
  $("#MANG_citation").toggle();
  $("#MANG_image_citation").toggle();
  if (mang_citation) {
    $("#MANG_citation_toggle").text("Show Citations");
  } else {
    $("#MANG_citation_toggle").text("Hide Citations");
  }
});

$("#Ayers_toggle_overview").click(() => {
  $("#Ayers_overview").toggle();
});
$("#Ayers_toggle_evaluation").click(() => {
  $("#Ayers_evaluation").toggle();
});
$("#Ayers_toggle_usage").click(() => {
  $("#Ayers_usage").toggle();
});
$("#Ayers_citation_toggle").click(() => {
  ayers_citation = !ayers_citation;
  $("#Ayers_citation").toggle();
  $("#Ayers_image_citation").toggle();
  if (ayers_citation) {
    $("#Ayers_citation_toggle").text("Show Citations");
  } else {
    $("#Ayers_citation_toggle").text("Hide Citations");
  }
});

$("#Nieto_toggle_overview").click(() => {
  $("#Nieto_overview").toggle();
});
$("#Nieto_toggle_evaluation").click(() => {
  $("#Nieto_evaluation").toggle();
});
$("#Nieto_toggle_usage").click(() => {
  $("#Nieto_usage").toggle();
});
$("#Nieto_citation_toggle").click(() => {
  nieto_citation = !nieto_citation;
  $("#Nieto_citation").toggle();
  $("#Nieto_image_citation").toggle();
  if (nieto_citation) {
    $("#Nieto_citation_toggle").text("Show Citations");
  } else {
    $("#Nieto_citation_toggle").text("Hide Citations");
  }
});
