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

const galleryEl = document.querySelector('.gallery'); 
      galleryEl.classList.add('list-container')
    
const galeryItems = images.map( ({url, alt}) => {     

      const galeryItem = document.createElement('li');
      galeryItem.classList.add('flex-image')

      const galeryImg = document.createElement('img')
      galeryImg.src = url;
      galeryImg.alt = alt;
      galeryImg.classList.add('flex-image')

      galeryItem.appendChild(galeryImg);
    
return galeryItem;

});

galleryEl.append(...galeryItems);

//
