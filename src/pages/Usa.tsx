import video from "./../assets/usa.mp4"

const Usa = () => {
  return (
    <div className="usa">
      <video className="usa-video" autoPlay controls muted>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Usa;