import React from 'react';
import {
  Button,
  Grid,
  Stepper,
  Step,
  StepLabel
} from '@material-ui/core';


import style from './style';
import DatosEmprendedor from '../datosEmprendedor'
import HardSkills from '../hardSkills'
import SoftSkills from '../softSkills'
import ElEmprendimiento from '../elEmprendimiento'    
import Preguntas from '../preguntas'

export default function Page() {
  const classes = style();

  function getSteps() {
    return ['', '', '', '', ''];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <DatosEmprendedor />;
      case 1:
        return <HardSkills />;
      case 2:
        return <SoftSkills />;
      case 3:
          return <ElEmprendimiento />;
      case 4:
          return <Preguntas />
      default:
        return 'Unknown stepIndex';
    }
  }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        if(activeStep <= steps.length - 1){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className= {classes.root}
        >
            <Grid item xs={12} lg={2}>
                <Button size="small"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                >
                    Atrás
                </Button>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
                </Stepper>
            </Grid>
            <Grid item xs={12} lg={2}>
                <Button size="small"
                        id="button"
                        color="primary" 
                        onClick={handleNext}
                        className={classes.button}
                        >
                    {activeStep === steps.length -1 || activeStep === steps.length ? 'Terminar' : 'Siguiente'}
                </Button>
                {activeStep === steps.length ? 
                    <script type="text/javascript">
                        document.getElementById("button").onclick = function () {
                            setTimeout(() => {
                                window.location.href = "../../../emprendedor/home"
                            }, 300)
                        };
                    </script>
                    :
                    <></>
                }
            </Grid>
            
            {activeStep === steps.length ? (
                <></>
            ) : <Grid item xs={12}>
                    {getStepContent(activeStep)}
                </Grid>
            }  
            
        </Grid>
    );
}