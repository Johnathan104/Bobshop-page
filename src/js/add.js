$(document).ready(function () {
    //untuk rules
    $("#addRuleForm").submit(function (e) { 
        e.preventDefault();
        console.log("what")
        $.ajax({
            type: "POST",
            url: "./backend/addRule.php",
            data: {
                rule_id:$("#rule_id").val(),
                rule:$("#rule").val(),
                rule_masalah:$("#problem_select").val()
            },
            success: function (response) {
                response= $.parseJSON(response)
                alert(response.message)
                location.reload();
            },
            error: (response)=>{
                console.log(response.responseText)
                response= $.parseJSON(response.responseText)
                alert(response.message)
            }
        });
    });
    $("#addMasalahForm").submit(function (e) { 
        e.preventDefault();
        console.log("what")
        $.ajax({
            type: "POST",
            url: "./backend/addMasalah.php",
            data: {
                masalah_nama:$("#masalah_nama").val(),
                kode_masalah:$("#kode_masalah").val()
            },
            success: function (response) {
                console.log(response)
                response= $.parseJSON(response)
                alert(response.message)
                location.reload();
            },
            error: (response)=>{
                console.log(response)
                console.log(response)
                response= $.parseJSON(response.responseText)
                alert(response.message)
            }
        });
    });
    $("#addGejalaForm").submit(function (e) { 
        e.preventDefault();
        console.log("what")
        $.ajax({
            type: "POST",
            url: "./backend/addGejala.php",
            data: {
                gejala_nama:$("#gejala_nama").val(),
                gejala_kode:$("#gejala_kode").val()
            },
            success: function (response) {
                console.log(response)
                response= $.parseJSON(response)
                alert(response.message)
                location.reload();
            },
            error: (response)=>{
                console.log(response)
                console.log(response)
                response= $.parseJSON(response.responseText)
                alert(response.message)
            }
        });
    });
});