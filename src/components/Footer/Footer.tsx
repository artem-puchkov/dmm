import { Box, Typography } from "@mui/material";

export function Footer() {
    return (
        <Box sx={{
            textAlign: "center",
            paddingBottom: 5,
            paddingTop: 5
        }}>
            <Typography fontSize={16}>🍀 DevMate by Артём Пучков</Typography>
        </Box>
    )
}