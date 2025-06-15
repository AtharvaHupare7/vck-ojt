import Header from "../components/Header/Header";

const HomePage = () => {
    return(
          <div>
            <Header/>
            <h1>Welcome to Vivekanand College</h1>
            <p>Your journey to excellence starts here.</p>
            <h3>Introduction</h3>
            <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.

At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>


<h2>Why Choose Vivekanand College?</h2>
 <ul>
    <li> Legacy of Excellence: Decades of commitment to quality education.      </li>
    <li> Experienced Faculty: Learn from renowned experts and passionate educators.     </li>
    <li> Modern Facilities: Well-equipped labs, expansive library, and comfortable campus. </li>
    <li>   Holistic Development: Focus on co-curricular activities, sports, and community service.    </li>
    <li>Strong Placements: Excellent career opportunities with leading companies</li>

 </ul>
 <h2>Campus Life & Facilities</h2>

    <div className="campus-container">
      

      {/* First Image */}
      <img
        src="/Images/campus-life-Crkero7B.jpg" // Put your uploaded image in /public/images
        alt="Vivekanand College Poster"
        className="campus-image"
      />
      <br/>

      {/* Second Image */}
      <img
        src="/Images/students-studying-DbLGuwF_.jpeg"
        alt="College Campus"
        className="campus-image"
        height="250"/>
        <br/>
        <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
       
    </div>

    </div>
    )
}
export default HomePage;