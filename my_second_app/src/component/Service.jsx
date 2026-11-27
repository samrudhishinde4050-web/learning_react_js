
const Service = () => {
  return (
    <section
      className="bg-muted-warning w-100 py-5"
      id="services"
    >
      <div className="container-fluid px-4">
        <div className="row">

          {/* Services Heading */}
          <div className="md:col-12  p-6">
           <h1>
              Our Services
            </h1>
          </div>

          {/* Services Table */}
          <div className="md:col-12">
            <table className="table w-100">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Menu</th>
                  <th scope="col">Quantity</th>
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
    </section>
  );
};

export default Service;
