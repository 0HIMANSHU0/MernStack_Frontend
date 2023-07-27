import React from 'react';
import "./profile.css"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"

const Profile = () => {
  return (
    <div className="container"> 
    <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
<Card.Body>
  <Row>
    <div className="col">
      <div className="card-profile-stats d-flex justify-content-center">
<img src="/man.png" alt="img" />
      </div>
    </div>
  </Row>
  <div className="text-center">
    <h3>Himanshu</h3>
    <h4><i class="fa-solid fa-envelope email"></i>&nbsp; :- <span>himanshusaini@gmail.com</span></h4>
    <h5><i class="fa-solid fa-mobile"></i>&nbsp; :- <span>9876543210</span></h5>
    <h4><i class="fa-solid fa-person"></i>&nbsp; :- <span>Male</span></h4>
    
    <h4><i class="fa-solid fa-location-dot location"></i>&nbsp; :- <span>Haryana</span></h4>
    <h4>Status&nbsp; :- <span>Active</span></h4>
    <h4><i class="fa-solid fa-calendar-days" style={{color: "#a30515"}}></i>&nbsp; Date Created&nbsp; :- <span>Active</span></h4>
    <h4><i class="fa-solid fa-calendar-days" style={{color: "#a30515"}}></i>&nbsp; Date Updated&nbsp; :- <span>Active</span></h4>
  </div>
</Card.Body>
    </Card>
    </div>
  )
}

export default Profile
