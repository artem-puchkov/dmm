import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function PostCard() {
    return (
        <Box sx={{position: "relative",
                  width: 400, height: 100, 
                  backgroundColor: "#1E5945", 
                  borderRadius: 5}}>
            <Box sx={{position: "absolute", 
                      bottom: "5px", right: "5px", 
                      width: 390, height: 90, 
                      backgroundColor: "#ffffff", 
                      borderRadius: 5}}>
                <AccountCircleIcon style={{color: "#1414b8"}}/>
                <Typography>{post.username}</Typography>
                <Typography>{}</Typography>
            </Box>
        </Box>
    );
}

// Сделать интерфейс для приходящих данных
const post = {
    username: "Oxxyd",
    title: "Asasdfasdasdsdfasdfafsd",
    tech: "Go",
}