$(document).ready(function () {
    $("#txtValorBruto").val("0,00");
    $("#txtPIS").val("0,65");
    $("#txtCofins").val("3,00");
    $("#txtCSocial").val("1,00");
    $("#txtISS").val("5,00");
    $("#txtIRRF").val("1,50");

    $("#txtValorBruto").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });
    $("#txtPIS").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });
    $("#txtCofins").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });
    $("#txtCSocial").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });
    $("#txtISS").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });
    $("#txtIRRF").maskMoney({ showSymbol: false, symbol: "", decimal: ",", thousands: "." });

    $("#txtValorBruto").keypress(function () {
        $(this).CalculaRetencao();
    });
    $("#txtPIS").keypress(function () {
        $(this).CalculaRetencao();
    });
    $("#txtCofins").keypress(function () {
        $(this).CalculaRetencao();
    });
    $("#txtCSocial").keypress(function () {
        $(this).CalculaRetencao();
    });
    $("#txtISS").keypress(function () {
        $(this).CalculaRetencao();
    });
    $("#txtIRRF").keypress(function () {
        $(this).CalculaRetencao();
    });
});


jQuery.fn.CalculaRetencao =
function () {
    var valorBruto = parseFloat($("#txtValorBruto").val().replace(".", "").replace(",", "."));

    var taxaPIS = parseFloat($("#txtPIS").val().replace(".", "").replace(",", "."));
    var taxaCOFINS = parseFloat($("#txtCofins").val().replace(".", "").replace(",", "."));
    var taxaCSocial = parseFloat($("#txtCSocial").val().replace(".", "").replace(",", "."));

    if (taxaPIS.toString() == "NaN") taxaPIS = 0;
    if (taxaCOFINS.toString() == "NaN") taxaCOFINS = 0;
    if (taxaCSocial.toString() == "NaN") taxaCSocial = 0;

    var taxaGrupo = taxaPIS + taxaCOFINS + taxaCSocial;

    var valorTotalGrupo = (valorBruto * taxaGrupo) / 100;

    $("#lblSubTotalPercent").text(taxaGrupo.toFixed(2));
    $("#lblTotalGrupo").text("R$ " + valorTotalGrupo.toFixed(2));

    var taxaISS = parseFloat($("#txtISS").val().replace(".", "").replace(",", "."));

    if (taxaISS.toString() == "NaN") taxaISS = 0;

    var valorTotalISS = (valorBruto * taxaISS) / 100;

    $("#lblValorISS").text("R$ " + valorTotalISS.toFixed(2));

    var taxaIRRF = parseFloat($("#txtIRRF").val().replace(".", "").replace(",", "."));

    if (taxaIRRF.toString() == "NaN") taxaIRRF = 0;

    var valorTotalIRRF = (valorBruto * taxaIRRF) / 100;

    $("#lblValorIRRF").text("R$ " + valorTotalIRRF.toFixed(2));

    $("#lblTotalPercent").text((taxaGrupo + taxaISS + taxaIRRF).toFixed(2));

    $("#lblTotal").text("R$ " + (valorTotalGrupo + valorTotalISS + valorTotalIRRF).toFixed(2));
};