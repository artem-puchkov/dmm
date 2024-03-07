import { AppBar, Box, Button, Divider, Toolbar, Typography } from "@mui/material";

const buttonStyles = {
    color: "black",
    fontFamily: "Red Hat Display, sans-serif",
    fontSize: 17,
    textTransform: "none",
    "&:hover": {
        backgroundColor: "transparent"
    },
    marginRight: 2
};

const slashStyle = {
    userSelect: "none",
    fontFamily: "Red Hat Display, sans-serif",
    alignSelf: "center",
    color: "black",
    marginRight: 0.9
}

export function Header() {
    return (
        <AppBar
            elevation={0}
            sx={{position: "fixed", backgroundColor: "#A8D8A4", height: 70}}
        >
            <Toolbar
                sx={{width: 1480, margin: "auto auto"}}
            >
                <Box display={"flex"} flexGrow={1}>
                    <Button sx={buttonStyles} style={{fontSize: 24}} disableRipple>DevMate</Button>
                    <Divider
                        orientation="vertical" 
                        variant="middle" 
                        flexItem
                        sx={{backgroundColor: "rgba(0, 0, 0, 0.5)", marginRight: 2, marginTop: 1.5}}    
                    />
                    <Button sx={buttonStyles} disableRipple>Анкеты</Button>
                    <Button sx={buttonStyles} disableRipple>Создать анкету</Button>
                    <Button sx={buttonStyles} disableRipple>Контакты</Button>
                </Box>
                <Box display={"flex"}>
                    <Button sx={buttonStyles}>Регистрация</Button>
                    <Typography sx={slashStyle}>/</Typography>
                    <Button sx={buttonStyles}>Вход</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};