/**
 * Creates accordian dropdown for volunteer signup
 */
$("#volunteer-btn").click(function (e) {
  if ($(this).hasClass("btn-danger")) {
    $(this).removeClass("btn-danger").addClass("btn-warning")
    $(this).text("Sign Up")
  } else {
    $(this).removeClass("btn-warning").addClass("btn-danger")
    $(this).text("Close")
  }
})

/**
 * Send request to server from volunteer form submission
 */
$("#volunteer-form").on("submit", function (e) {
  e.preventDefault()
  const formData = $(this).serializeArray()
    .reduce((respObj, current) => {
      respObj[current.name] = current.value
      return respObj
    }, {})

  db.add("volunteers", formData)

  $.ajax({
    url: "localhost:3000/api",
    method: "POST",
    body: formData,
    dataType: "json",
    success: function (resp) {
      console.info("This successfully posted")
    },
    error: function (err) {
      console.warn(err)
    }
  })
})

/**
 * Login => Redirect to Admin Portal
 */
$("#admin-btn").click(function (e) {
  window.location.href = '/admin'
})
/**
 * Student Form => Redirect to '/student'
 */
$("#register-btn").click(function (e) {
  window.location.href = '/student'
})

/**
 * Volunteer Form - Page changes
 */
$('.volunteer-btn').click(function (e) {
  $('.volunteer').toggleClass('active');
})

 $("#logout").click(function(e){
   window.location.href = '/'
 })

