function convert(amount) {
    var amountAsDollar = amount.toString();
    amountAsDollar = addCommas(amountAsDollar);
    return "$" + amountAsDollar + ".00";
};

function addCommas(intNum) {
    return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

module.exports = convert;