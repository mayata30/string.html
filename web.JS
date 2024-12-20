

<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<title>String and Math functions</title>

<style>

div {
text-align: center;
border-bottom: 2px solid black;
padding-bottom: 2em;
}

h2 {
text-transform: uppercase;
text-align: center;
margin-top: 2em;
width: 100%;
padding: 5px;
color: #222324;
font-family: 'Courier New', Courier, monospace;
box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
}

table,
tr,
td,

th {
padding: 1em;
}

table {
width: 100%;
}

th {
text-align: left;
}

.selector {
padding: .5em;
background-color: #002607;
color: white;
border: none;
outline: none;
border-radius: 5px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

li {
text-align: left;
margin-top: 5px;
padding: 10px;
}

ul {
background-color: #1a1b1c;
color: white;
}

</style>

</head>

<body>

<div>

<h2>String Functions</h2>

<table>
<tbody>

<tr>
<th>Enter a text</th>
<td> <input type="text" id="input_srting" name="input_s"></td>
</tr>

<tr>
<th>Search a text</th>
<td> <input type="text" id="input_search" name="input_search"></td>
</tr>

<tr>
<th>Slice start</th>
<td><input type="text" id="slice_s" name="slice_s"></td>
</tr>

<tr>
<th>Slice end</th>
<td><input type="text" id="slice_e" name="slice_e"></td>
</tr>

<tr>
<th>Replace the word</th>
<td><input type="text" id="replace_f"></td>
</tr>

<tr>
<th>Replace with</th>
<td><input type="text" id="replace_s"></td>
</tr>

<tr>
<th>Concat</th>
<td><input type="text" id="con"></td>
</tr>

<tr>
<th>Pad Start</th>
<td><input type="text" id="pad_s"></td>
</tr>

<tr>
<th>Pad End</th>
<td><input type="text" id="pad_e"></td>
</tr>

<tr>
<th>Repeat</th>
<td><input type="text" id="rep"></td>
</tr>

<tr>
<th>Split</th>
<td><input type="text" id="spl"></td>
</tr>

<tr>
<th>Position</th>
<td><input type="text" id="pos"></td>
</tr>

</tbody>
</table>

<input type="button" value="Generate" class="selector" onclick="string_func()">
<br><br>

<ul id="output"> </ul>

</div>

<div>

<h2>Math Functions</h2>

<table>
<tbody>

<tr>
<th>Enter a Number</th>
<td> <input type="text" id="input_num"></td>
</tr>

<tr>
<th>Power term</th>
<td> <input type="text" id="input_pow"></td>
</tr>

</tbody>
</table>

<input type="button" value="Generate" class="selector"
onclick="math_func()">

<br><br>

<ul id="output_math"> </ul>

</div>

<script>

function string_func()
{

let input = document.getElementById('input_srting').value;
let i_search = document.getElementById('input_search').value;
let slice_s = document.getElementById('slice_s').value;
let slice_e = document.getElementById('slice_e').value;
let replace_f = document.getElementById('replace_f').value;
let replace_s = document.getElementById('replace_s').value;
let con = document.getElementById('con').value;
let pad_s = document.getElementById('pad_s').value;
let pad_e = document.getElementById('pad_e').value;
let rep = document.getElementById('rep').value;
let spl = document.getElementById('spl').value;
let pos = document.getElementById('pos').value;

let li_O = '<li>';
let li_C = '</li>';
let list_items;

list_items = li_O + 'Length of string is : ' + input.length + li_C;
list_items += li_O + 'First index of ' + i_search + ' is ' + input.indexOf(i_search) + li_C;
list_items += li_O + 'Last index of ' + i_search + ' is ' + input.lastIndexOf(i_search) + li_C;
list_items += li_O + 'Index with search starting position 5 of ' + i_search + ' is ' + input.indexOf(i_search, 5) + li_C;
list_items += li_O + 'Search ' + i_search + ' is ' +input.search(i_search) + li_C;
list_items += li_O + 'Slice[ ' + slice_s + ' : ] is ' +input.slice(slice_s) + li_C;
list_items += li_O + 'Slice[ ' + slice_s + ' : ' + slice_e + ' ] is ' + input.slice(slice_s, slice_e) + li_C;
list_items += li_O + 'Substring[ ' + slice_s + ' : ' + slice_e+ ' ] is ' + input.substring(slice_s, slice_e) + li_C;
list_items += li_O + 'Substr[ ' + slice_s + ' : ] is ' +input.substr(slice_s) + li_C;
list_items += li_O + 'Substr[ ' + slice_s + ' : ] with length '+ slice_e + ' is ' + input.substr(slice_s, slice_e) + li_C;
list_items += li_O + 'replace ' + replace_f + ' with ' + replace_s + ' is ' + input.replace(replace_f, replace_s) + li_C;
list_items += li_O + 'replace ' + replace_f + ' with ' + replace_s + ' is ' + input.replaceAll(replace_f, replace_s) + li_C;
list_items += li_O + 'Uppercase : ' + input.toUpperCase() +li_C;
list_items += li_O + 'lowercase : ' + input.toLowerCase() +li_C;
list_items += li_O + 'Concated : ' + input.concat(" ", con) +li_C;
let input1 = input.trim();
list_items += li_O + 'Original Length : ' + ' ' + input.length + li_C;
list_items += li_O + 'Trimed Length : ' + input1.length + li_C;
let input2 = input.trimStart();
list_items += li_O + ' Trimed Start Length : ' + input2.length + li_C;
let input3 = input.trimEnd();
list_items += li_O + ' Trimed End Length : ' + input3.length + li_C;
let input4 = input;
list_items += li_O + 'Pad Start : ' + input4.padStart(parseInt(pad_s), "o") + li_C;
list_items += li_O + 'Pad End : ' + input4.padEnd(parseInt(pad_e), "o") + li_C;
list_items += li_O + 'Repeated : ' + input.repeat(parseInt(rep)) + li_C;
list_items += li_O + 'Splitted : ' + input.split(spl) + li_C;
let input5 = parseInt(pos)-1;
list_items += li_O + 'The' + ' ' + pos + ' ' + 'positioned character in the string is : ' + input[input5] + li_C;
list_items += li_O + 'The character at the ' + ' ' + pos + ' ' + 'index in the string is : ' + input.at(parseInt(pos))+ li_C;
list_items += li_O + 'The character code positioned at ' + ' ' + pos + ' ' + ' in the string is : ' + input.charCodeAt(input5) + li_C;
list_items += li_O + 'The character at ' + ' ' + pos + ' ' + ' in the string is : ' + input.charAt(input5) + li_C;

document.getElementById('output').innerHTML = (list_items);
}

function math_func() {
let input = document.getElementById('input_num').value;
let power = document.getElementById('input_pow').value;
let li_O = '<li>';
let li_C = '</li>';
let list_items;
list_items = li_O + ' Value of  PI : ' + Math.PI + li_C;
list_items += li_O + ' Round of  ' + input + ' is : ' + Math.round(input) + li_C;
list_items += li_O + '' + input + ' raise to ' + power + ' is : ' + Math.pow(input,power) + li_C;
list_items += li_O + ' Square root of  ' + input +' is : ' + Math.sqrt(input) + li_C;
list_items += li_O + ' Absolute value of  ' + input +' is : ' + Math.abs(input) + li_C;
list_items += li_O + ' Ceil value of  ' + input +' is : ' + Math.ceil(input) + li_C;
list_items += li_O + ' Floor value of  ' + input +' is : ' + Math.floor(input) + li_C;
list_items += li_O + ' Sin value of  ' + input +' is : ' + Math.sin(input* Math.PI / 180) + li_C;
list_items += li_O + ' Cos value of  ' + input + ' is : ' + Math.cos(input* Math.PI / 180) + li_C;
list_items += li_O + ' Minimum of (0, 150, 30, 20, -8, -200) is : ' + Math.min(0, 150, 30, 20, -8, -200) + li_C;
list_items += li_O + 'Maximum of (0, 150, 30, 20, -8, -200) is : ' + Math.max(0, 150, 30, 20, -8, -200) + li_C;
list_items += li_O + 'A Random number is : ' + Math.random()+ li_C;
document.getElementById('output_math').innerHTML =(list_items);
}

</script>

</body>

</html>

	
