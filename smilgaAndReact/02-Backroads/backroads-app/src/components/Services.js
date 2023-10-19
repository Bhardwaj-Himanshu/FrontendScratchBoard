import Title from "./Title"
import { serviceData } from "../Data"

const Services = () => {
  return (
    <section className="section services" id="services">
    <div className="section-title">
      <Title title="our" subTitle="Services" />
    </div>
    <div className="section-center services-center">
      {serviceData.map((item)=>{
        return (
        <article className="service" key={item.id}>
        <span className="service-icon"><i className={item.icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{item.title}</h4>
          <p className="service-text">
           {item.text}
          </p>
        </div>
      </article>)
      })}
    </div>
  </section>
  )
}
export default Services