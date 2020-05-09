$(document).ready(function () {
    $(".submit").on("click", function (event) {
        event.preventDefault();
        let newTable = {
            name: $("#reserve-name").val().trim(),
            phone: $("#reserve-phone").val().trim(),
            email: $("#reserve-email").val().trim(),
            uniqueId: $("#reserve-unique-id").val().trim()
        };
        $
            .post("/api/reserve", newTable)
            .then(function (data) {
                console.log(data);
                alert("Adding your reservation...");
            });
    });
});