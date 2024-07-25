import Carousel from 'react-bootstrap/Carousel';
const FirstSlider = () => {
  const carouselImage = [
    "https://assets.tatacliq.com/medias/sys_master/images/51869107159070.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107224606.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/52141455048734.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107421214.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107421214.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107355678.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107290142.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107683358.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869107552286.jpg"
  ]
  return (
    <Carousel>
      {carouselImage.map((ele,i)=>(
        <Carousel.Item key={i}>
          <img src={ele}/>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default FirstSlider