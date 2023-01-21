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
import { Link } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Lẩu cá đuối',
    imgPath:
      'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/BeFunky-collage(5).jpg',
    link: 'https://www.google.com/search?q=l%E1%BA%A9u%20c%C3%A1%20%C4%91u%E1%BB%91i&source=lmns&bih=914&biw=1680&hl=en&sa=X&ved=2ahUKEwih3_jy3Nf8AhUG-zgGHW3eCHwQvS56BAgPEAw&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AJOqlzXfp9A4Huwv6eWh0996lziuchwcXA:1674271908578&rflfq=1&num=10&rldimm=13497813452286111944&lqi=ChFs4bqpdSBjw6EgxJF14buRaUjS1oG8u7KAgAhaIxAAEAEQAhgAGAEYAiIRbOG6qXUgY8OhIMSRdeG7kWkyAnZpkgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSNUxVbHRNbWhuUlJBQqoBIhABGh4QASIaNaXJXndei1SKwKgD-M64FwTgXPW9iolk2dA&phdesc=zGlW7GXscxs&rlst=f#rlfi=hd:;si:13497813452286111944,l,ChFs4bqpdSBjw6EgxJF14buRaUjS1oG8u7KAgAhaIxAAEAEQAhgAGAEYAiIRbOG6qXUgY8OhIMSRdeG7kWkyAnZpkgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSNUxVbHRNbWhuUlJBQqoBIhABGh4QASIaNaXJXndei1SKwKgD-M64FwTgXPW9iolk2dA,y,zGlW7GXscxs;mv:[[10.9785536,106.7949503],[10.7198408,106.6151534]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9',
  },
  {
    label: 'Ashtray Cocktail Factory',
    imgPath:
      'https://cdn.khoequan.com/wp-content/uploads/2022/10/12225154/311605481_5787285084655719_3961366106369142391_n.jpg?ssl=1',
    link: 'http://www.ashtray.vn/'
  },
  {
    label: 'Go downtown',
    imgPath:
      'https://www.itourvn.com/images/easyblog_images/2020/December/update_district_1_hcm/nguyen-hue-pedestrian-street-night.jpg',
    link: 'https://www.google.com/maps/place/Ph%C3%B4%CC%81+%C4%91i+b%C3%B4%CC%A3+Nguy%C3%AA%CC%83n+Hu%C3%AA%CC%A3,+%C4%90.+Nguy%C3%AA%CC%83n+Hu%C3%AA%CC%A3,+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.7739888,106.7036608,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f46fd67ea19:0x57881ba4c546af7a!8m2!3d10.7740664!4d106.7036542'
  },
  {
    label: 'Hotel',
    imgPath:
      'https://assets.website-files.com/619bb38c7dfe56fa47a49885/626552496526a272899be4f9_cohost-vn-khach-san-la-gi-1.png',
    link: 'https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzXJ8FopGYtDept7_Z5Xqr-dy4ADHQ:1674272017245&q=nha+nghi+su+van+hanh&rflfq=1&num=10&sa=X&ved=2ahUKEwjrh-Gm3df8AhVu-TgGHWLTDSgQjGp6BAgbEAE&biw=1680&bih=914&dpr=2#rlfi=hd:;si:;mv:[[10.7765633,106.6742573],[10.7569988,106.6669362]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2'
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => { 
    
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div>
            {/* <h2 style={{textAlign: "center"}}>{step.label}</h2> */}
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
               
              />
              <Link href={step.link} color="inherit">
  Click me
</Link>
              </div>
              
              
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
            Next
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
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
