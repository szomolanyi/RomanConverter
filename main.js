/*$().ready(function() {
    console.log("start");
    tsts=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,18,19,20,21,22,23,24,28,29,81,82,84,89,91,99,100,101,102,103,109,111,112,119,201,209,999,1000,1345];
    for (var i=0;i<tsts.length; i++) {
        var rom=convertToRoman(tsts[i]);
        var r=$("<p>").html(tsts[i]+" === "+rom);
        $('#tests').append(r);
    };
});*/

function convert() {
    var roman=convertToRoman(Number($("#input").val()));
    $("#result").html(roman);
}


var cntable = {
    1: ['I', 'V', 'X'],
    10 : ['X', 'L', 'C'],
    100 : ['C', 'D', 'M'],
    1000 : ['M']
};

function convertDigit(n, tens) {  
    var res='';
    var larger=1;
    if (n>=5) {
        larger=2;
        n=n-5;
        if (n<=3) res=cntable[tens][1];
    }
    if (n<=3) {
        for (j=0; j<n; j++) res+=cntable[tens][0];
    }
    else if (n===4) {
        res+=cntable[tens][0];
        res+=cntable[tens][larger];
    }
    return res;
};

function convertToRoman(num) {
    if (num<1 || num>4999) return 0;
    var snum = num.toString().split('');
    var slen=snum.length;
    var res='';
    for (i=0; i<slen; i++) {
        var n=Number(snum[i]);
        res+=convertDigit(n, Math.pow(10, slen-1-i));
    }
    return res;
}
