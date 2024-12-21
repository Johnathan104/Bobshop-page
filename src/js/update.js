$(document).ready(function () {
    $("#updateSection").hide()
    $("#add_button").click(()=>{
        $("#addSection").show();
        $("#updateSection").hide();
    })
    $("#update_button").click(()=>{
        $("#addSection").hide();
        $("#updateSection").show();
    })
    // for choosing 
    $("#gejala_select").change(function () { 
        $.ajax({
            type: "GET",
            url: "./backend/getGejala.php",
            data: {
                id: $("#gejala_select").val()
            },
            
            success: function (response) {
                response= JSON.parse(response)
                $("#update_gejala_nama").val(response.nama_gejala)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
             }
            
        });
    });

    $("#masalah_select").change(function () { 
        $.ajax({
            type: "GET",
            url: "./backend/getMasalah.php",
            data: {
                id: $("#masalah_select").val()
            },
            
            success: function (response) {
                response= JSON.parse(response)
                $("#update_masalah_nama").val(response.nama_masalah)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
             }
            
        });
    });

    $("#rule_select").change(function () { 
        $.ajax({
            type: "GET",
            url: "./backend/getRules.php",
            data: {
                id: $("#rule_select").val()
            },
            
            success: function (response) {
                response= JSON.parse(response)
                console.log(response)
                $("#update_rule_nama").val(response.gejala_conditions)
                $("#update_rule_masalah").val(response.masalah_id)
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
             }
            
        });
    });
   $("form").submit(function (e) { 
    e.preventDefault(); // Prevent default form submission
});

$("#btnUpdateGejala").click(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "./backend/updateGejala.php",
        data: {
            event: "update",
            id: $("#gejala_select").val(),
            nama: $("#update_gejala_nama").val(),
        },
        success: function (response) {
            response = $.parseJSON(response);
            alert(response.message);
             // Refresh and go to #tables
            location.reload()
            location.href = location.pathname + "#tables"
        },
        error: function (res) {
            res = $.parseJSON(res.responseText);
            alert(res.message);
        }
    });
});

$("#btnUpdateMasalah").click(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "./backend/updateMasalah.php",
        data: {
            event: "update",
            id: $("#masalah_select").val(),
            nama: $("#update_masalah_nama").val(),
        },
        success: function (response) {
            response = $.parseJSON(response);
            alert(response.message);
            // Refresh and go to #tables
            location.reload()
            location.href = location.pathname + "#tables"
        },
        error: function (res) {
            res = $.parseJSON(res.responseText);
            alert(res.message);
        }
    });
});

$("#btnUpdateRule").click(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "./backend/updateRule.php",
        data: {
            event: "update",
            id: $("#rule_select").val(),
            gejala_conditions: $("#update_rule_nama").val(),
            id_masalah: $("#update_rule_masalah").val(),
        },
        success: function (response) {
            response = $.parseJSON(response);
            alert(response.message);
            // Refresh and go to #tables
            location.reload()
            location.href = location.pathname + "#tables"
        },
        error: function (res) {
            res = $.parseJSON(res.responseText);
            alert(res.message);
        }
    });
});

$("#btnDeleteGejala").click(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "./backend/updateGejala.php",
        data: {
            event: "delete",
            id: $("#gejala_select").val(),
            nama: $("#update_gejala_nama").val(),
        },
        success: function (response) {
            response = $.parseJSON(response);
            alert(response.message);
             // Refresh and go to #tables
            location.reload()
            location.href = location.pathname + "#tables"
        },
        error: function (res) {
            res = $.parseJSON(res.responseText);
            alert(res.message);
        }
    });
});

$("#btnDeleteMasalah").click(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "./backend/updateMasalah.php",
        data: {
            event: "delete",
            id: $("#masalah_select").val(),
            nama: $("#update_masalah_nama").val(),
        },
        success: function (response) {
            response = $.parseJSON(response);
            alert(response.message);
             // Refresh and go to #tables
            location.reload()
            location.href = location.pathname + "#tables"
        },
        error: function (res) {
            res = $.parseJSON(res.responseText);
            alert(res.message);
        }
    });
});

$("#btnDeleteRule").click(function (event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "./backend/updateRule.php",
        data: {
            event: "delete",
            id: $("#rule_select").val(),
            gejala_conditions: $("#update_rule_nama").val(),
            id_masalah: $("#update_rule_masalah").val(),
        },
        success: function (response) {
            response = $.parseJSON(response);
            alert(response.message);
        
            location.reload() // Refresh and go to #tables
            location.href = location.pathname + "#tables"
        },
        error: function (res) {
            res = $.parseJSON(res.responseText);
            alert(res.message);
        }
    });
});
})