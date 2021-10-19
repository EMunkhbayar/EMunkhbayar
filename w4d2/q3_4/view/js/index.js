$(() => {
    const addedSuccess = (itemNums) => {
        $("#cart").text("My Shopping Cart ("+itemNums+")");
        $("#msg").text("Data added successfully");
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
    }

    $("#addToCart").submit(() => {
        const data = {
            name: $("#name").val(),
            price: $("#price").val(),
            qty: $("#qty").val(),
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});