function a() {
    var a = 10;
    var a = 20;
    if (true) {
        console.log(a);
    }
}
function b() {
    var a = 10;
    var a = 30; // it gives error: can't re-declare 'a' in the same scope 
    console.log(b);
}
a();
b();
