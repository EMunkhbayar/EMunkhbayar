$(() => {
    $("#txt").focus();
    const success = (answer) => {
        $("#txt").val(answer);
        $("#txt").select();
    }
    const noSuccess = () => {
        $("#txt").val("Error..");
    }
    $("#ask").submit(() => {
        $.get("/answer")
            .done(success)
            .fail(noSuccess);
        return false;
    });
});