import PropTypes from "prop-types";
import {Button} from "react-bootstrap";

const Profile = props => {
return (
  <div style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
   {props.children}
   {props.bio}
  <span>I am a {props.profession}</span>

  <Button variant="success" onClick={() => props.handlename(props.fullName)}>Who am i ?</Button>{' '}

   </div>
)
}; 
export default Profile;


Profile.defaultProps = {
  fullName: "Yassine Chatti",
  bio: "Hi everybody !",
  profession: "Student",
 };
 Profile.propTypes = {
   fullName : PropTypes.string,
   bio : PropTypes.string,
   profession: PropTypes.string,
   handlename: PropTypes.func
 }
