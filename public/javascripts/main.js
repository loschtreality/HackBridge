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

  $.ajax({
    url: "localhost:3000/api/volunteers",
    method: "POST",
    body: formData,
    dataType: "json",
    success: function(resp) {
      console.info("This successfully posted")
    },
    error: function(err) {
      console.warn(err)
    }
  })
})
