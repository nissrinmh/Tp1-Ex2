import 'bootstrap/dist/css/bootstrap.min.css'
import pr from'./pr.jpg'
import './profil.css'

const Cartt=()=>{
    return(
    <div className='carte1'>
        <div class="card"  >
        <div class="card-body">
          <h5 class="card-title">General information </h5>
          <table class='table'>
            <tr>
                <td className='span'>Roll:</td>
                <td>125</td>
            </tr>
            <tr>
                <td className='span'>Academic year:</td>
                <td>2020</td>
            </tr>
            <tr>
                <td className='span'>Gender:</td>
                <td>Male</td>
            </tr>
            <tr>
                <td className='span'>Religion:</td>
                <td>Group</td>
            </tr>
            <tr>
                <td className='span'>blood:</td>
                <td>B+</td>
            </tr>
          </table>
           </div>
      </div>
      </div>
    )
}
const Cart=()=>{
    return(
    <div>
    <div className='carte'>
    <div class="card"  >
    <img src={pr} class="card-img-top" alt="" id='pr'/>
    <div class="card-body">
      <h5 class="card-title">Nissrin Mahan</h5>
      <p class="card-text"><span className='span'>Student ID:</span> 111111111</p>
      <p class="card-text"><span className='span'>Class:</span>3</p>
      <p class="card-text"><span className='span'>Section:</span>A</p>
    </div>
  </div>
  </div>

  </div>
    )
}

const Carttt=()=>{
    return(
    <div className='carte1'>
        <div class="card"  >
        <div class="card-body">
          <h5 class="card-title">Other information </h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea saepe, vero voluptate esse tenetur sequi laudantium recusandae perferendis velit sunt
             dignissimos rerum! Ullam voluptate ratione enim, est perspiciatis quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam et vitae cupiditate sit! Aspernatur enim a consequuntur modi aliquid nobis, magni, iusto,
              quaerat rerum animi dolor dolore assumenda eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo aut, quasi itaque impedit alias culpa ipsa? Provident
               expedita amet velit quas omnis magnam dignissimos autem dolorem tempore! Voluptatum, omnis deserunt!</p>
           </div>
      </div>
      </div>
    )
}

const Profill=()=>{
    return(
    <div >
        <div className='bonj'>
            <h3 >Student Profil</h3>
            <p className='p1'>Welcome</p>
        </div>
        <div className='container'>
            <Cart/>
            <div>
            <Cartt/>
            <Carttt/>
            </div>
            
        </div>
       
    </div>
    )
}
export default Profill;