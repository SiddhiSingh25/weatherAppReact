import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Bottom() {
    let imgUrl = `https://th.bing.com/th/id/OIP.RH1xTaydx3T8WxV_YhjJgAHaFy?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`;
    let res = {
        city: "Ballia",
        feels_like: "33.46",
        humidity: "80",
        pressure: 1003,
        temp: 28.53,
        description: "Clear Sky",
        country: "IN"
    }
    return (
        <>
        
            
        </>
    )
}
export default Bottom
/*<Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imgUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h1>{res.city} - {res.country}</h1>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Humidity : {res.humidity}&deg;C</p>
                           <p>  Pressure :{res.pressure}&deg;C</p>
                            <p>The weather is {res.description} and it's feels like {res.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> */