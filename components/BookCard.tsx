import { Card, CardMedia, CardContent, Typography, Button, Divider, Rating } from "@mui/material";



export default function BookCard({ title, author, cover, description, rating }: any) {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={cover}
                    alt={title}
                />
                <CardContent>
                    <Rating name="read-only" value={rating} precision={0.5} /> {rating}
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {author}
                    </Typography>
                    <Divider sx={{ opacity: 1 }} flexItem={true} />
                    <Typography variant="caption" color="black" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Button>Conosci di più</Button>
                </CardContent>
            </Card>
        </>
    )
}