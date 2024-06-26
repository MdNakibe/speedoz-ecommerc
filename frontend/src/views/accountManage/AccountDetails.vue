<template>
    <div class="account-detail-form">
      <div class="inner">
        <form class="tg-form">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputfname">First Name</label>
              <input type="text" class="form-control" id="inputfname" placeholder="First Name">
            </div>
            <div class="form-group col-md-6">
              <label for="inputlname">Last Name</label>
              <input type="text" class="form-control" id="inputlname" placeholder="Last Name">
            </div>
            <div class="form-group col-md-12">
              <label for="inputdname">Display Name</label>
              <input type="text" class="form-control" id="inputdname" placeholder="Display Name">
            </div>
            <div class="form-group col-md-12">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-12">
              <label for="inputdob">Birthdate</label>
              <input type="text" class="form-control" id="inputdob" placeholder="MM/DD/YYYY">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountDetails'
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  