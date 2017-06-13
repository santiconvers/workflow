// This is a line comment
/*
    This is a block comment
*/

(function() {
    $('#btn-suma').on('click', function(){
        var first = parseFloat($('#first').val());
        var last = parseFloat($('#last').val());
        $('#result').val(first + last);
    });
})();