let result,
	fnumber = 0,
	lnumber = 0,
	operator,
	prevNumber = 0

for (let i = 0; i < 10; i++) {
	document.getElementById(i).onclick = function () {
		document.getElementById('text').value =
			document.getElementById('text').value + i
	}
}

document.getElementById('posNegBtn').onclick = function () {
	let x = document.getElementById('text').value
	let y = x.charAt(0)
	if (y != '-') {
		document.getElementById('text').value = '-' + x
	} else {
		document.getElementById('text').value = ''
		for (let i = 1; i < x.length; i++) {
			document.getElementById('text').value =
				document.getElementById('text').value + x.charAt(i)
		}
	}
}

document.getElementById('sumBtn').onclick = function () {
	if (document.getElementById('text').value == '') {
		document.getElementById('prevText').value =
			document.getElementById('prevText').value.split(' ')[0] + ' +'
	} else if (document.getElementById('prevText').value.length > 0) {
		let op = document.getElementById('prevText').value.split(' ')[1]
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
		prevNumber = document.getElementById('prevText').value.split(' ')[0]
		prevNumber = Number(prevNumber)
		switch (op) {
			case '+':
				fnumber = prevNumber + fnumber
				break
			case '-':
				fnumber = prevNumber - fnumber
				break
		}
	} else {
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
	}
	operator = 'sum'
	document.getElementById('text').value = ''
	document.getElementById('prevText').value = fnumber + ' +'
}

document.getElementById('diffBtn').onclick = function () {
	if (document.getElementById('text').value == '') {
		document.getElementById('prevText').value =
			document.getElementById('prevText').value.split(' ')[0] + ' -'
	} else if (document.getElementById('prevText').value.length > 0) {
		let op = document.getElementById('prevText').value.split(' ')[1]
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
		prevNumber = document.getElementById('prevText').value.split(' ')[0]
		prevNumber = Number(prevNumber)
		switch (op) {
			case '+':
				fnumber = prevNumber + fnumber
				break
			case '-':
				fnumber = prevNumber - fnumber
				break
			case '*':
				fnumber = prevNumber * fnumber
				break
			case '/':
				fnumber = prevNumber / fnumber
				break
		}
	} else {
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
	}
	operator = 'diff'
	document.getElementById('text').value = ''
	document.getElementById('prevText').value = fnumber + ' -'
}

document.getElementById('prodBtn').onclick = function () {
	if (document.getElementById('text').value == '') {
		document.getElementById('prevText').value =
			document.getElementById('prevText').value.split(' ')[0] + ' *'
	} else if (document.getElementById('prevText').value.length > 0) {
		let op = document.getElementById('prevText').value.split(' ')[1]
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
		prevNumber = document.getElementById('prevText').value.split(' ')[0]
		prevNumber = Number(prevNumber)
		switch (op) {
			case '+':
				fnumber = prevNumber + fnumber
				break
			case '-':
				fnumber = prevNumber - fnumber
				break
			case '*':
				fnumber = prevNumber * fnumber
				break
			case '/':
				fnumber = prevNumber / fnumber
				break
		}
	} else {
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
	}
	operator = 'prod'
	document.getElementById('text').value = ''
	document.getElementById('prevText').value = fnumber + ' *'
}

document.getElementById('qouBtn').onclick = function () {
	if (document.getElementById('text').value == '') {
		document.getElementById('prevText').value =
			document.getElementById('prevText').value.split(' ')[0] + ' /'
	} else if (document.getElementById('prevText').value.length > 0) {
		let op = document.getElementById('prevText').value.split(' ')[1]
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
		prevNumber = document.getElementById('prevText').value.split(' ')[0]
		prevNumber = Number(prevNumber)
		switch (op) {
			case '+':
				fnumber = prevNumber + fnumber
				break
			case '-':
				fnumber = prevNumber - fnumber
				break
			case '*':
				fnumber = prevNumber * fnumber
				break
			case '/':
				fnumber = prevNumber / fnumber
				break
		}
	} else {
		fnumber = document.getElementById('text').value
		fnumber = Number(fnumber)
	}
	operator = 'qou'
	document.getElementById('text').value = ''
	document.getElementById('prevText').value = fnumber + ' /'
}

document.getElementById('equalsBtn').onclick = function () {
	lnumber = document.getElementById('text').value
	lnumber = Number(lnumber)

	if (
		document.getElementById('text').value == '' &&
		document.getElementById('prevText').value == ''
	) {
		document.getElementById('text').value = 0
		document.getElementById('prevText').value = 0
	} else if (fnumber == 0) {
		document.getElementById('prevText').value = lnumber
		document.getElementById('text').value = lnumber
	} else {
		document.getElementById('text').value = ''
		switch (operator) {
			case 'sum':
				result = fnumber + lnumber
				break
			case 'diff':
				result = fnumber - lnumber
				break
			case 'prod':
				result = fnumber * lnumber
				break
			case 'qou':
				result = fnumber / lnumber
				break
		}
		document.getElementById('text').value = result
		document.getElementById('prevText').value = result
		fnumber = result
	}
}

document.getElementById('dotBtn').onclick = function () {
	if (document.getElementById('text').value.includes('.')) {
		console.log('already contains dot')
	} else {
		document.getElementById('text').value =
			document.getElementById('text').value + '.'
	}
}

document.getElementById('clearBtn').onclick = function () {
	document.getElementById('prevText').value = ''
	document.getElementById('text').value = ''
	lnumber = ''
	fnumber = ''
	prevNumber = ''
}

document.getElementById('deleteBtn').onclick = function () {
	string = document.getElementById('text').value
	document.getElementById('text').value = ''
	for (let i = 0; i < string.length - 1; i++) {
		document.getElementById('text').value =
			document.getElementById('text').value + string.charAt(i)
	}
}
