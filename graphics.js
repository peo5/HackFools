// TODO: retornar svg e lista de ingredientes

function create(tag='div', inner, parentEl, classes) {

	let el = document.createElementNS('http://www.w3.org/2000/svg', tag);;

	if(inner)
		el.innerHTML = inner
	
	if(classes)
		el.classList.add(classes)

	if(parentEl)
		parentEl.appendChild(el)
	
	return el

}

function setAttributes(el, attributes) {
	for(let attrib in attributes)
		el.setAttribute(attrib, attributes[attrib])
}

// let massaG = `
// <circle cx="100" cy="100" r="90" stroke="yellow" stroke-width="6" fill="orange" /> 
// `

let ingredientsG = [
	{ 
		name: 'calabresa',
		svg: `
		<circle r="10" fill="red" /> 
		`
	}, 
	{ 
		name: 'pimentao',
		svg: `
		<rect width='15' height='5' fill="green" /> 
		`
	}
]

function transformEl(el, transx=0, transy=0, rotate=0) {
	let transform = ''
	if(transx || transy)
		transform += `translate(${transx},${transy}) `
	if(rotate)
		transform += `rotate(${rotate}) `
	setAttributes(el, { transform: transform })
}

function irregularCircle(parentEl, fill='red', amp=5, radius=100, div=10) {
	let el = create('polygon', null, parentEl)
	let points = ''
	for(let i=0; i<div; i++) {
		let ang = 2*Math.PI*i/div
		let dist = (amp*Math.random() + radius)
		let x = Math.sin(ang) * dist 
		let y = Math.cos(ang) * dist
		points += x + ',' + y + ' '
	}
	setAttributes(el, {points: points, fill: fill})
}

function makePizza(ingredients, radius=100) {

	let side = 2*(radius + 30)

	let el = create('svg', null, null, 'pizza_div')
	setAttributes(el, { width:side, height:side })

	let center = create('g', null, el, 'center')
	transformEl(center, side/2, side/2)

	let massaLayer = create('g', null, center, 'base_layer')
	irregularCircle(center, 'orange', 5, radius+20, 40)
	irregularCircle(center, 'red', 10, radius+5, 40)
	irregularCircle(center, 'yellow', 10, radius, 40)

	let ingLayer = create('g', null, center, 'ingredient_layer')

	for(let ingIdx of ingredients) {
		let nSlices = 5
		let nPieces = 3
		for(let i=0; i<nSlices; i++)
		for(let j=0; j<nPieces; j++) {
			let ingEl = create('g', ingredientsG[ingIdx].svg, ingLayer, 'ingredient') 
			let angle = 2 * Math.PI * (Math.random() + i)/nSlices 
			let dist = (radius-10) * (1-Math.pow(Math.random(), 2))
			let rot = Math.random() * 360
			transformEl(ingEl, dist*Math.sin(angle), dist*Math.cos(angle), rot)
		}
	}

	return el

}
