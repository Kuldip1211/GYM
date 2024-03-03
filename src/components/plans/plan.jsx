import './plan.css'
import { plansData } from '../../data/plan';
import Whitetik from '../../assets/whiteTick.png';
function Plan(){
 return (
  <>
 <div className="plans-container">
  <div className="plans-header">
   <span className="stroke-text">READY TO START</span>
   <span>YOUR JOURNEY</span>
   <span className="stroke-text">NOW WITHUS</span>
  </div>

  <div className="blur"></div>
  {/* plan cards */}
  <div className="plans">
   {plansData.map((plan,i)=>(
    <div className="plan" key={i}>
      {plan.icon}
      <span>{plan.name}</span>
      <span className="price">$ {plan.price}</span>

     <div className="feacture">
      {plan.features.map((features,i)=>(
       <div key={i} className="feature">
         <img src={Whitetik} alt="" />
         <span key={i}>{features}</span>
       </div>
      ))}
     </div>

     <div>
      <span>See more</span>
     </div>
      <button className="btn">JOIN NOW</button>
    </div>
   ))}
  </div>
 </div>
  </>
 )
}
export default Plan;