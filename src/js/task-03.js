const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.getElementById('gallery')
console.log(galleryList)

const createGallery = ({url, alt}) => {
 const galleryEl = document.createElement('li')
 const galleryImg = document.createElement('img')
 const link = url
 const discripe = alt
 galleryImg.src = link
 galleryImg.alt = discripe
 galleryEl.append(galleryImg)
 galleryList.append(galleryEl)

 return galleryList
}

const allGallery = images.map(createGallery)




