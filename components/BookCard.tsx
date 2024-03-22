import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function BookCard({name,description}: any) {
    return (
        <Card style={{backgroundColor: 'darkgray'}}>
            <CardMedia
                style={{ height: '50%', paddingTop: "50%" }}
                image={'https://m.media-amazon.com/images/I/81U2Hy3rvrL._AC_UF1000,1000_QL80_.jpg'}
                title={name}
            />

            <CardContent>
                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography variant="body2" component="p" style={{ textAlign: "left", padding: "10px" }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href='#TEXSG'
                    target="_blank"
                >
                    Più Informazioni
                </Button>
            </CardActions>
        </Card>
    );
}