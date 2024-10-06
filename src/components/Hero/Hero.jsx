import {Button} from "@mui/material";
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div><Button className={styles.button}
    variant="contained">Book Call</Button></div>
  )
}

export default Hero