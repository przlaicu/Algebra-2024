$(document).ready(function () {

    // Your solution here

    $(document).ready(function() {
        $('p:first').css('background-color', 'yellow'),
        $('p:nth-child(2)').click(function() {
            $('p').remove('.gone')
        }),
        $('p:nth-child(3)').dblclick(function() {
            console.log(' 2 click')
            $('p').remove('.dclick')
        })
    })
});