function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}


$(function() {
    /**
     * Init banner
     */
    $('.banner-video').coverVid(1920, 1080);

    /**
     * Fill beers !
     */

    // TODO: Get beer list from server
    var beers = [
        {
            name: 'London porter',
            type: 'Porter',
            description: "Petite Porter des familles. Bière londonienne par excellence, sa brasserie «meantime» est disposée sur le méridien de greenwich."
        },
        {
            name: 'Hilden Halt',
            type: 'Irish Red Ale',
            description: "L'«Irish Red Ale» est l'interprétation moderne de la bière rousse par les Irlandais. Très douce et sucrée, c'est une bière facile d'accès."
        }
    ]
    $('#beers .side-image').each(function(beerId) {
        var beer = beers[beerId];

        if (!beer)
            return;

        $(this).children('.images-wrapper').css('background-image', 'url("/assets/images/'+camelize(beer.name)+'.jpg")');
        $(this).find('h4').text(beer.type);
        $(this).find('h1').text(beer.name);
        $(this).find('p').text(beer.description);
    });
});
