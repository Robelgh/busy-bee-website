import React from "react";

export const Registration = (props) => {
  return (
    <div class="registrationPage">
    <form class="register">
      <h1>Register</h1>
      <div class="form-container">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="givenName">Given Name</label>
          <input type="text" class="form-control" id="givenName" placeholder="given name"/>
        </div>
        <div class="form-group col-md-6">
          <label for="surName">Surname</label>
          <input type="text" class="form-control" id="surName" placeholder="sur name"/>
        </div>
    </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div class="form-group col-md-6">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" class="form-control" id="phoneNumber" placeholder="phone number"/>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
          <label for="adress1">Adress1</label>
          <input type="text" class="form-control" id="adress1" placeholder="Adress"/>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-12">
          <label for="adress2">Adress2</label>
          <input type="text" class="form-control" id="adress2" placeholder="Adress"/>
        </div>
    </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="subCity">Sub City</label>
        <input type="text" class="form-control" id="subCity"/>
      </div>
    <div class="form-group col-md-4">
      <label for="houseNumber">House Number</label>
      <input type="text" class="form-control" id="houseNumber"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check form-row">
        <div class="col-lg-12">
        <input class="form-check-input" type="checkbox" id="gridCheck"/>
          <label class="form-check-label" for="gridCheck">
            Check me out
        </label>
        </div>
    </div>
  </div>

    
  <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
  
    </form>
  </div>  
  );
};
