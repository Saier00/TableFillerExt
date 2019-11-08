# TableFilerExt

## Demo
jQuery:<br>
<https://codepen.io/saier00/pen/MWWGzNM>
<br>
NativeJS:<br>
<https://codepen.io/saier00/pen/OJJZqXp>

## jQuery
* Requires jQuery

Firstly, include jQuery.tableFillerExt.js or jQuery.tableFillerExt.min.js:

```js
<script src="jQuery.tableFillerExt.js"></script>
```

### Usage


To add headers to table (th) use the following method:

```js
$("table").addThs("H1","H2","H3");
```

![Imgur0](https://i.imgur.com/FOURFKU.png)

To add data to table (td) use the following method:

```js
$("table").addTds("A1","A2","A3");
```
![Imgur1](https://i.imgur.com/8AT6u5i.png)

Both methods return jQuery Object of table, so you can chain them:
```js
$("table").addThs("H1","H2","H3","H4").addTds("A1","A2","A3","A4");
```
![Imgur2](https://i.imgur.com/I4cN6jd.png)
Use number before the one of headers in the addThs(...args) method to apply propety `colspan="{number}"` to it:
```js
$("table").addThs("H1",2,"H2","H3").addTds("A1","A2","A3","A4");
```
![Imgur3](https://i.imgur.com/R1IFMCL.png)
Use number in the addTds(...args) method to insert {number} empty tds:
```js
$("table").addThs("H1","H2","H3","H4").addTds("A1",1,"A2",1).addTds(2,"A3","A4");
```
![Imgur4](https://i.imgur.com/33czj00.png)

## NativeJS
Include tableFillerExt.js or tableFillerExt.min.js:
```js
<script src="tableFillerExt.js"></script>
```
### Usage
The plugin extends methods of Element of NativeJS for table. Usage of it is similar to usage with jQuery Objects.
## License

This plugin is available under [the MIT license](http://mths.be/mit).