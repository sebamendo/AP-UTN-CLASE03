import './App.css'

function App() {

  return (
    <>

      <div className="card">
        <div className="card-img">
          <img src="https://imgs.search.brave.com/vExBZmuiN_Z0L8hcLjtxiHSm9EvEAz-oYszZP-c5s_A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVsbGg0cmQuY29t/LmFyL2ltZy9wcm9k/dWN0b3MvNS9wYy1n/YW1lci1hbWQtcnl6/ZW4tNS01NjAweGE1/MjAxNmdiMXRiZ3R4/LTE2NjAtc3VwZXIt/MC5qcGc" alt="" />
        </div>
        <div className="card-content">
          <h2>Pc Gamer</h2>
          <p className='price'>Precio: $ 200.000</p>
          <p className='description'><span className='title'>Description:</span><br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum iure sed aspernatur quibusdam repellat 
            ipsam placeat, porro veritatis harum similique culpa ex earum soluta possimus ut tempora voluptates 
            laudantium voluptatem.</p>
          <p className='sku'>SKU:</p>
          <p className='number'>123BJ34VJHLU</p>
          <p className='stock'>Stock: 10</p>
          <button className='btn-primari'>Comprar</button>
        </div>
      </div>

    </>
  )
}

export default App
