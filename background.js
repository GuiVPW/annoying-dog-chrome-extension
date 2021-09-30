function updateImages() {
	const imageLinks = [
		"http://pm1.narvii.com/6968/c8631bd3fbeed0937c9393d3de866407af1e1215r1-1270-1269v2_uhq.jpg",
		"https://static.wikia.nocookie.net/debatesjungle/images/c/c1/1z4FBfS.gif/revision/latest/scale-to-width-down/300?cb=20181204013628",
		"https://cdn2.scratch.mit.edu/get_image/gallery/27070541_170x100.png",
		"https://c.tenor.com/1_pkq4PEycYAAAAM/anoyying-dog.gif",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUyukV6GFCsmmNtal62hUfvepcLo7O6dECjEnD5Yzyx4Ehm6-pWwrnopJGj3ewfffD6A&usqp=CAU",
	]

	images = document.querySelectorAll("img")

	images.forEach(function (image) {
		image.src = imageLinks[Math.floor(Math.random() * imageLinks.length)]
	})
}

updateImages()
