let HIDDEN = true;
let Skills_citation,
  Inclusion_citation,
  Experiences_citation,
  Languages_citation,
  Homework_citation,
  Imposter_citation;
$("document").ready(() => {
  if (HIDDEN) {
    $("#Skills_overview").hide();
    $("#Skills_evaluation").hide();
    $("#Skills_usage").hide();
    $("#Skills_citation").hide();
    $("#Skills_image_citation").hide();

    $("#Inclusion_overview").hide();
    $("#Inclusion_evaluation").hide();
    $("#Inclusion_usage").hide();
    $("#Inclusion_citation").hide();
    $("#Inclusion_image_citation").hide();

    $("#Experiences_overview").hide();
    $("#Experiences_evaluation").hide();
    $("#Experiences_usage").hide();
    $("#Experiences_citation").hide();
    $("#Experiences_image_citation").hide();

    $("#Languages_overview").hide();
    $("#Languages_evaluation").hide();
    $("#Languages_usage").hide();
    $("#Languages_citation").hide();
    $("#Languages_image_citation").hide();

    $("#Homework_overview").hide();
    $("#Homework_evaluation").hide();
    $("#Homework_usage").hide();
    $("#Homework_citation").hide();
    $("#Homework_image_citation").hide();

    $("#Imposter_overview").hide();
    $("#Imposter_evaluation").hide();
    $("#Imposter_usage").hide();
    $("#Imposter_citation").hide();
    $("#Imposter_image_citation").hide();

    $("#Skills_citation_toggle").text("Show Citations");
    $("#Inclusion_citation_toggle").text("Show Citations");
    $("#Experiences_citation_toggle").text("Show Citations");
    $("#Languages_citation_toggle").text("Show Citations");
    $("#Homework_citation_toggle").text("Show Citations");
    $("#Imposter_citation_toggle").text("Show Citations");
    Skills_citation = true;
    Inclusion_citation = true;
    Experiences_citation = true;
    Languages_citation = true;
    Homework_citation = true;
    Imposter_citation = true;
  }
});
$("#Skills_toggle_overview").click(() => {
  $("#Skills_overview").toggle();
});
$("#Skills_toggle_evaluation").click(() => {
  $("#Skills_evaluation").toggle();
});
$("#Skills_toggle_usage").click(() => {
  $("#Skills_usage").toggle();
});
$("#Skills_citation_toggle").click(() => {
  Skills_citation = !Skills_citation;
  $("#Skills_citation").toggle();
  $("#Skills_image_citation").toggle();
  if (Skills_citation) {
    $("#Skills_citation_toggle").text("Show Citations");
  } else {
    $("#Skills_citation_toggle").text("Hide Citations");
  }
});

$("#Inclusion_toggle_overview").click(() => {
  $("#Inclusion_overview").toggle();
});
$("#Inclusion_toggle_evaluation").click(() => {
  $("#Inclusion_evaluation").toggle();
});
$("#Inclusion_toggle_usage").click(() => {
  $("#Inclusion_usage").toggle();
});
$("#Inclusion_citation_toggle").click(() => {
  Inclusion_citation = !Inclusion_citation;
  $("#Inclusion_citation").toggle();
  $("#Inclusion_image_citation").toggle();
  if (Inclusion_citation) {
    $("#Inclusion_citation_toggle").text("Show Citations");
  } else {
    $("#Inclusion_citation_toggle").text("Hide Citations");
  }
});

$("#Experiences_toggle_overview").click(() => {
  $("#Experiences_overview").toggle();
});
$("#Experiences_toggle_evaluation").click(() => {
  $("#Experiences_evaluation").toggle();
});
$("#Experiences_toggle_usage").click(() => {
  $("#Experiences_usage").toggle();
});
$("#Experiences_citation_toggle").click(() => {
  Experiences_citation = !Experiences_citation;
  $("#Experiences_citation").toggle();
  $("#Experiences_image_citation").toggle();
  if (Experiences_citation) {
    $("#Experiences_citation_toggle").text("Show Citations");
  } else {
    $("#Experiences_citation_toggle").text("Hide Citations");
  }
});

$("#Languages_toggle_overview").click(() => {
  $("#Languages_overview").toggle();
});
$("#Languages_toggle_evaluation").click(() => {
  $("#Languages_evaluation").toggle();
});
$("#Languages_toggle_usage").click(() => {
  $("#Languages_usage").toggle();
});
$("#Languages_citation_toggle").click(() => {
  Languages_citation = !Languages_citation;
  $("#Languages_citation").toggle();
  $("#Languages_image_citation").toggle();
  if (Languages_citation) {
    $("#Languages_citation_toggle").text("Show Citations");
  } else {
    $("#Languages_citation_toggle").text("Hide Citations");
  }
});

$("#Homework_toggle_overview").click(() => {
  $("#Homework_overview").toggle();
});
$("#Homework_toggle_evaluation").click(() => {
  $("#Homework_evaluation").toggle();
});
$("#Homework_toggle_usage").click(() => {
  $("#Homework_usage").toggle();
});
$("#Homework_citation_toggle").click(() => {
  Homework_citation = !Homework_citation;
  $("#Homework_citation").toggle();
  $("#Homework_image_citation").toggle();
  if (Homework_citation) {
    $("#Homework_citation_toggle").text("Show Citations");
  } else {
    $("#Homework_citation_toggle").text("Hide Citations");
  }
});

$("#Imposter_toggle_overview").click(() => {
  $("#Imposter_overview").toggle();
});
$("#Imposter_toggle_evaluation").click(() => {
  $("#Imposter_evaluation").toggle();
});
$("#Imposter_toggle_usage").click(() => {
  $("#Imposter_usage").toggle();
});
$("#Imposter_citation_toggle").click(() => {
  Imposter_citation = !Imposter_citation;
  $("#Imposter_citation").toggle();
  $("#Imposter_image_citation").toggle();
  if (Imposter_citation) {
    $("#Imposter_citation_toggle").text("Show Citations");
  } else {
    $("#Imposter_citation_toggle").text("Hide Citations");
  }
});
