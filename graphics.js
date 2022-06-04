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

function makePizza(ingredients, radius=100) {

	let el = create('svg', null, null, 'pizza_div')
	setAttributes(el, { width:2*(radius+10), height:2*(radius+10) })

	let massa = create('circle', null, el, 'pizza_massa') 
	setAttributes(massa, { 
		cx:radius+10, 
		cy:radius+10, 
		r:radius, 
		stroke:'orange', 
		'stroke-width':6, 
		fill:'yellow'
	})

	let ingLayer = create('g', null, el, 'ingredient_layer')
	transformEl(ingLayer, 10+radius, 10+radius)

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

	return { graphics: el, ingredients: [] }

}
