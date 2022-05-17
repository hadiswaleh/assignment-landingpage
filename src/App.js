import './App.css';
import Navbar from './component/navbar';
import Courosel from './component/courosel';
import CircleGrid from './component/circlegrid';
import ComplexGrid from './component/complexgrid';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Banner from './component/gifbanner';
import Container from '@mui/material/Container';
import image1 from './circleimage/aa.png'
import image2 from './circleimage/bb.png'
import image3 from './circleimage/cc.png'
import image4 from './circleimage/dd.png'
import image5 from './circleimage/ee.png'
import image6 from './circleimage/ff.png'
import image7 from './circleimage/gg.png'

const imagessssss = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:image1,
  },
  {
    label: 'Bird',
    imgPath:image2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:image3,
  },
  {
    label: 'Goč, Serbia',
    imgPath:image4,
  },
  {
    label: 'Indonesia',
    imgPath:image5,
  },
  {
    label: 'Iran',
    imgPath:image6,
  },
  {
    label: 'Iran',
    imgPath:image7,
  },
  {
    label: 'Iran',
    imgPath:image1,
  },
  {
    label: 'Iran',
    imgPath:image2,
  },
  {
    label: 'Iran',
    imgPath:image4,
  },
];



function App() {
  return (
    <div className="App">       
         <Navbar />
         <Container maxWidth="xl">
         <Grid container>
         <Grid lg={8}>
         <Courosel />           
        </Grid>   
        <Grid lg={4}>
          <img src="https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-01.png" />
        </Grid>    
        </Grid>     
         <Grid item xs={12} lg={12} sm={12}  container sx={{ backgroundColor:'#CCC', }} p={2} >
         <ComplexGrid image={'https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-02.png'} heading={'Grid API'}  />
         <ComplexGrid image={'https://k.nooncdn.com/cms/pages/20220516/4f2f689e2774faa782f5541f7198af0d/en_mb_uae-mega-01.png'} heading={'Grid API'}  />
         <ComplexGrid image={'https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-04.png'} heading={'Grid API'}  />
         </Grid >
         <Courosel />
         <CircleGrid circleimage={imagessssss} />
         <Grid item xs={12} lg={12} sm={12}  container sx={{ backgroundColor:'#CCC', }} p={2} >
         <Grid lg={12}>         
        <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png"  />
        </Grid>
         <ComplexGrid image={'https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png'} heading={'Grid API'}  />
         <ComplexGrid image={'https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png'} heading={'Grid API'}  />
         <ComplexGrid image={'https://k.nooncdn.com/cms/pages/20220516/33ca0d58675329a114943cf096992fdf/en_mb_uae-mega-04.png'} heading={'Grid API'}  />
         </Grid >         
         <Grid container p={2}>
         <Banner image={'https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif'}   />
         </Grid>          

         </Container>   
         <Grid container lg={12} sx={{ backgroundColor:'#CCC', }} p={2}>
         <Grid lg={2}>Footer 1</Grid>
         <Grid lg={2}>Footer 2</Grid>
         <Grid lg={2}>Footer 3</Grid>
         <Grid lg={2}>Footer 4</Grid>
         <Grid lg={2}>Footer 5</Grid>
         <Grid lg={2}>Footer 6</Grid>
         </Grid>

    </div>
  );
}

export default App;
