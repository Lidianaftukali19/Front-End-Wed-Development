// function clear calculator screenasync.parallel([
    async.apply(fs.writeFile, 'testfile1', 'test1'),
    async.apply(fs.writeFile, 'testfile2', 'test2')
function clearScreen () {
    document.getElementById("result").value="";
}
// function show values
function display(value) {
    document.getElementById("result").value += value;
}
// function calculate result
function calculate () {
    var p = document.getElemetnById("result").value;
    var q = eval (p);
    document.getElementById("result").value = q;
}