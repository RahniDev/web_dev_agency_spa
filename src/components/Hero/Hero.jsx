import { Button } from "@mui/material";
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <section>
      <h1>Contryv</h1>
      <Button className={styles.button}
        variant="contained">Book Call</Button>
    </section>
  )
}

export default Hero