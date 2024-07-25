// import React from 'react'

const Rewards = () => {
  const prodImage = [
    "https://assets.tatacliq.com/medias/sys_master/images/51869107945502.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108142110.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108207646.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108338718.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108404254.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108469790.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108535326.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/51869108600862.jpg"
  ]
  const rewardImage=[
    "https://assets.tatacliq.com/medias/sys_master/images/50074650869790.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/50040038359070.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/50063519580190.jpg"
  ]
  return (
    <div>
    <div style={{display:"flex",width:"100%",justifyContent:"space-between",marginTop:"30px"}}>
      {prodImage.map((ele,i)=>(
        <img key={i} style={{width:"110px",height:"110px"}} src={ele}/>
      ))}
    </div>
    <div style={{width:"86%",margin:"auto",marginTop:"50px",display:"flex",justifyContent:"space-between"}}>
      {rewardImage.map((ele,i)=>(
        <img key={i} src={ele}/>
      ))}
    </div>
    </div>
  )
}

export default Rewards