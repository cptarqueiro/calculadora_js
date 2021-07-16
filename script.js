function calcular(tipo, valor) {

	if (tipo === 'acao'){

		if (valor === 'c') {
			//limpar o visor da calculadora
			document.getElementById('resultado').value = ''
			alert('Calculadora limpada!') // cria uma dialog informando que o visor foi limpado
		}

		if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){

			// mostra no visor o operador
			document.getElementById('resultado').value += valor

		}

		if (valor === '=') {
			
			let valor_campo = eval(document.getElementById('resultado').value)
			document.getElementById('resultado').value = valor_campo

		}

	} else if (tipo === 'numero'){

		/*
		let valor_campo = document.getElementById('resultado').value 
		document.getElementById('resultado').value = valor_campo + valor
		PODE SER FEITO DESSA FORMA!
		*/

		document.getElementById('resultado').value += valor //porém assim, dá o mesmo resultado com bem menos código

	}

	console.log(tipo, valor)
	//teste git

}