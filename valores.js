alert('Bem-vindo ao FortunatoContas, aqui, a cada aula, o site irá atualizar para facilitar a vossa vida! Então, pra começar, coloca o valor do salário do povo aí. ');
var s1 = parseInt(prompt('O salário?'));
var s2 = parseInt(prompt('Seu número?'));
var s3 = parseInt(prompt('Número de Horas extras por dia sem o seu número'))
var hextrabase = s3+s2
var salario = s1 + s2;//Salário  A
var hora = salario/220;//Hora normal  B
var horaextra = hora/2;//Adicional de 50%  C
var hes = horaextra+hora//hora extra+hora  D
var hem = hes *s3;//Horas extras por mês
var valorhe = salario + hem;//Salário+Hora extra
var inss = 0;
if (valorhe <= 1212) {
    var inss = valorhe*0.075

}
else if (valorhe <= 2427.35) {

    var inss = (valorhe-1212)*0.09+90.9;
}
else if (valorhe <= 3641.03) {
    var inss = (valorhe-2427.35)*0.12+109.38;
}
else if (valorhe <= 7087.22) {
    var inss = (valorhe-3641.03)*0.14+145.64;
}
else if (valorhe >= 7087.22) {
    var inss = 828.39;
}
var baseirrf = valorhe - inss//base pro imposto de renda
var irrf = 0
if (baseirrf <= 1903.98) {
    var irrf = 0
}
else if (baseirrf <= 2826.65) {
    var irrf = (baseirrf*0.075)-142.8
}
else if (baseirrf <= 3751.05) {
    var irrf = baseirrf*0.15-354.8
}
else if (baseirrf <= 4664.68) {
    var irrf = baseirrf*0.225-646.13
}
else if (baseirrf >= 4664.48) {
    var irrf = baseirrf*0.3750-69.36
}

var salariol = baseirrf - irrf;
var inssp = valorhe*0.278;
var fgts = valorhe*0.08
var custoemp = valorhe+inssp+fgts

console.log(salario, 'Salário');//s1+s2
console.log(hora, 'Hora normal');//somar/220
console.log(horaextra, 'Adicional de 50%')//hora+50%
console.log(hes, 'Hora extra')
console.log(hextrabase, 'Horas extras por dia')
console.log(hem, 'Horas extras por mês')
console.log(valorhe, 'Hora extra + Salário');
console.log(inss, 'INSS')
console.log(baseirrf,'Base p/ IRRF')
console.log(irrf,'Imposto de renda')
console.log(salariol, 'Salário líquido]')
console.log(inssp, 'INSS Patronal')
console.log(fgts, 'FGTS')
console.log(custoemp, 'Custo Empresa')