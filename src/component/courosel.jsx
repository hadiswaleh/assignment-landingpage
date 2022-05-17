import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@mui/material/Grid';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220504/d1f4c72311df40f79df6e159f096f210/en_dk_ksa_hero-bulk-01.png',
  },
  {
    label: 'Bird',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220517/4adbd23b0040dc2315d825a6e5edc97a/en_dk_uae-hero-02.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220428/1747658ec328951b40462b55f6285f18/en_hero.gif',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_slider-01.png',
  },
];

function Courosel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
<Grid container>
<Grid  >     
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}

        
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
          
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
           
          </Button>
        }
      />
    </Grid>
    </Grid>
  );
}

export default Courosel;
