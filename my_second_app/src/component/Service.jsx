const Service = () =>{
    return(
 <div className="container bg-muted-warning" id="services">
    <div className="row">
        <h1>Our Services</h1>
        <div className="md:col-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Menu</th>
      <th scope="col">Quntity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Coffee</td>
      <td>2</td>
      <td>100 Rs.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Cold-Coffee</td>
      <td>9</td>
      <td>120 Rs.</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Hot-Coffee</td>
      <td>5</td>
      <td>180 Rs.</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
 </div>
    );
};
export default Service