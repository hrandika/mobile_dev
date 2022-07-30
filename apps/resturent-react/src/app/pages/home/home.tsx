import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './home.scss';

interface CardDetails {
  title: string;
}

export function Home() {
  const cards: CardDetails[] = [
    {
      title: 'Randika',
    },
    {
      title: 'Chanaka',
    },
    {
      title: 'Padma',
    },
    {
      title: 'Supuni',
    },
    {
      title: 'Randika',
    },
    {
      title: 'Chanaka',
    },
    {
      title: 'Padma',
    },
    {
      title: 'Supuni',
    },
  ];
  return (
    <div className="host">
      {cards.map((card) => {
        return (
          <Card className="card">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="assets/logo.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
